// НЕОБХОДИМЫЕ ПАКЕТЫ И ПЕРЕМЕННЫЕ
// ==================================================
var express = require('express');
var fs = require('fs');
var app = express();
// var upload = require("express-fileupload");
// app.use(upload());
var multer = require('multer');

const port = process.env.PORT || 3000
const liveReloadPort = 35729




// КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ
// ==================================================
// сообщаем Node где лежат ресурсы сайта

app.use(express.static(__dirname + '/public'));
// app.use('/files', express.static(process.cwd() + '/files/'))
var bodyParser = require('body-parser')
// app.use(bodyParser.json()) // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
//   extended: true
// }))


// создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = bodyParser.urlencoded({extended: false});
var obj = {
  categories: []
};


// app.use(express.urlencoded())
// app.use(require('connect-livereload')({
//     port: liveReloadPort
// }))

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname)
  }
});
// var upload = multer({storage: storage});

const upload = multer({storage: storage});

function readJsonFileSync(){
  var somedata = fs.readFileSync('file.json', 'utf8')

  return JSON.parse(somedata)
}

app.locals.data = require('./file.json');

// устанавливаем движок EJS для представления
app.set('views','./views');
app.set('view engine','ejs');

// настройка приложения instagram с помощью идентификатора клиента
// мы скоро это добавим

// УСТАНОВКА МАРШРУТОВ
// ===================================================
// главная страница — популярные изображения
app.get('/', function(req, res) {

  // используем пакет instagram для получения популярных картинок
  // отображаем главную страницу и выводим популярные изображения
  //res.render('pages/index', {file: readJsonFileSync()})
  res.render('pages/index');
  
});


// app.get('/getTasks', (request, response) => {
//   response.header('Cache-Control', 'no-cache, no-store, must-revalidate')
//   response.header('Pragma', 'no-cache')
//   response.header('Expires', 0)
//   response.send(readJsonFileSync())
// })


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
    // response.send(`${request.body.taskName} - ${request.body.deadline}-${request.body.status}-${request.body.fileName}`);
});



function findObj(obj,request){
  var bool=false;
  for (var i=0 ; i < obj.categories.length ; i++)
  {
    if (obj.categories[i].taskName == `${request.body.taskName}`) {
      //console.log(obj.categories[i].taskName);
      bool=true;
      if(typeof request.body.check === 'undefined'){
        obj.categories[i].deadline=`${request.body.deadline}`;
        obj.categories[i].status=`${request.body.status}`;
        //obj.categories[i].fileName=`${request.file.originalname}`;
        
      }else{
        fs.unlink(obj.categories[i].fileName,function(err){
          if(err){
            throw err;
          }else{
            console.log('File deleted');
          }
        })
        obj.categories.splice(i, 1);

      }
      break;
    }
  }
  return bool;
}
// ЗАПУСК СЕРВЕРА
// ==================================================
app.listen(3000);
console.log('Приложение запущено! Смотрите на http://localhost:3000');
 