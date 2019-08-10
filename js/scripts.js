var arrayList = [];
var userList = "";

$(document).ready(function(){

 $("form#items").submit(function(event){
   event.preventDefault();
   alert("form works");

   var userList = $("textarea#textList").val();

   alert(userList);

   arrayList.push(userList);


   alert(arrayList);


 });

});
