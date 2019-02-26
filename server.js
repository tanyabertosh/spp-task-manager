var express = require('express');
var fs = require('fs');
var app = express();
var multer = require('multer');

const port = process.env.PORT || 3000
const liveReloadPort = 35729

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
var obj = {
  categories: []
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname)
  }
});

const upload = multer({storage: storage});

function readJsonFileSync(){
  var somedata = fs.readFileSync('file.json', 'utf8')

  return JSON.parse(somedata)
}

app.locals.data = require('./file.json');

// устанавливаем движок EJS для представления
app.set('views','./views');
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
  
});


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.post("/", upload.single('myfile'), urlencodedParser, function (request, response) {
  console.log(request.file);
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  obj=JSON.parse(fs.readFileSync('file.json', 'utf8'));
   
  if (findObj(obj,request)==false){
    obj.categories.push({taskName: `${request.body.taskName}`, deadline:`${request.body.deadline}`,
    status:`${request.body.status}`, fileName: request.file.originalname});
  }
  var json = JSON.stringify(obj); //convert it back to json
  fs.writeFile('file.json', json, 'utf8', null); // write it back 
  response.render('pages/index',{data:obj});
    
});



function findObj(obj,request){
  var bool=false;
  for (var i=0 ; i < obj.categories.length ; i++)
  {
    if (obj.categories[i].taskName == `${request.body.taskName}`) {
     
      bool=true;
      if(typeof request.body.check === 'undefined'){
        obj.categories[i].deadline=`${request.body.deadline}`;
        obj.categories[i].status=`${request.body.status}`;
        
      }else{
        obj.categories.splice(i, 1);

      }
      break;
    }
  }
  return bool;
}
app.listen(3000);
console.log('Приложение запущено! Смотрите на http://localhost:3000');
 