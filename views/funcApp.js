// var inputs = document.querySelectorAll( '.inputfile' );
// Array.prototype.forEach.call( inputs, function( input ){
// 	var label	 = input.nextElementSibling,
// 		labelVal = label.innerHTML;

// 	input.addEventListener( 'change', function( e )
// 	{
// 		var fileName = '';
// 		if( this.files && this.files.length > 1 )
// 			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
// 		else
// 			fileName = e.target.value.split( '\\' ).pop();

// 		if( fileName )
// 			label.querySelector( 'span' ).innerHTML = fileName;
// 		else
// 			label.innerHTML = labelVal;
// 	});
// });

// function FilterTable() {
//     // Declare variables 
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[2];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       } 
//     }
// }

// function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById("myTable");
//     switching = true;
//     // Set the sorting direction to ascending:
//     dir = "asc"; 
//     /* Make a loop that will continue until
//     no switching has been done: */
//     while (switching) {
//       // Start by saying: no switching is done:
//       switching = false;
//       rows = table.rows;
//       /* Loop through all table rows (except the
//       first, which contains table headers): */
//       for (i = 1; i < (rows.length - 1); i++) {
//         // Start by saying there should be no switching:
//         shouldSwitch = false;
//         /* Get the two elements you want to compare,
//         one from current row and one from the next: */
//         x = rows[i].getElementsByTagName("TD")[n];
//         y = rows[i + 1].getElementsByTagName("TD")[n];
//         /* Check if the two rows should switch place,
//         based on the direction, asc or desc: */
//         if (dir == "asc") {
//           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//             // If so, mark as a switch and break the loop:
//             shouldSwitch = true;
//             break;
//           }
//         } else if (dir == "desc") {
//           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//             // If so, mark as a switch and break the loop:
//             shouldSwitch = true;
//             break;
//           }
//         }
//       }
//       if (shouldSwitch) {
//         /* If a switch has been marked, make the switch
//         and mark that a switch has been done: */
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//         // Each time a switch is done, increase this count by 1:
//         switchcount ++; 
//       } else {
//         /* If no switching has been done AND the direction is "asc",
//         set the direction to "desc" and run the while loop again. */
//         if (switchcount == 0 && dir == "asc") {
//           dir = "desc";
//           switching = true;
//         }
//       }
//     }
//   }


// function toggleSidebar(x){
// 	document.getElementById("sidebar").classList.toggle('active');
// 	x.classList.toggle("change");
// }

// function dropdownHome(){
//     document.body.style.backgroundImage = 'url(img/coffee-to-do-list-fon.jpg)';
//     var x = document.getElementById("selection-block1");
//     if (x.style.display !== "flex") {
//         x.style.display = "flex";
//         document.getElementById("rules-section-block1").style.display="none";
//         document.getElementById("UserInfo1").style.display="none";
//     } 
// }

// function dropdown()
// {     
// 	document.body.style.backgroundImage = 'url(img/coffee-to-do-list-fon.jpg)';
//     var x = document.getElementById("rules-section-block1");
//     if (x.style.display !== "flex") {
//         x.style.display = "flex";
//         document.getElementById("selection-block1").style.display="none";
//         document.getElementById("TaskInfo1").style.display="none";
//     } 
  
   
// }
// function dropdownTaskInfo(){
// 	// document.body.style.backgroundImage = 'url(img/table-fon.jpg)';
//     var x = document.getElementById("TaskInfo1");
//     if (x.style.display !== "flex") {  
//     	x.style.display = "flex";
//         document.getElementById("rules-section-block1").style.display="none";
//         document.getElementById("selection-block1").style.display="none";
//     }  
// }

// function check_data(){
// 	let task = document.getElementById('task').value;
// 	let date = document.getElementById('date').value;
//     let progress = document.getElementById('progress').value;
//     let file = document.getElementById('file').value;
// 	if (task==""|| date =="" || progress == "")
// 		return 1;
// 	else
// 		return 0;
// }

// $(".use-address").click(function() {
//   var $item1 = $(this).closest("tr")   // Finds the closest row <tr> 
//                      .find(".nr")     // Gets a descendent with class="nr"
//                      .text();         // Retrieves the text within <td>

//   $("#resultas").append($item1);       // Outputs the answer
// });

// function Some(){
//     var index = -1;
//     var filteredObj = file.categories.find(function(item, i){
//         if(item.taskName === $item1){
//           index = i;
//           return i;
//         }
//       });
//       dropdownTaskInfo();
//       document.getElementById('task')=filteredObj.taskName;   
//       document.getElementById('date')=filteredObj.deadline;
//       document.getElementById('status')=filteredObj.status;
//       document.getElementById('upload')=filteredObj.fileName;
// }
