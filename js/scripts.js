

$(document).ready(function(){

 $("form#items").submit(function(event){
   event.preventDefault();

  $("ol").empty();
  $("form#items").hide();
  $("div#userList").show();

   var items = ["item1", "item2", "item3", "item4", "item5"];
   var userItems = [];
   var userList = [];

   items.forEach(function(item){
     userItems.push($("input#" + item).val());
   });

   userItems.sort();

   userItems.forEach(function(item){
     userList.push(item.toUpperCase());
   });

   userList.forEach(function(item){
     $("ol").append("<li>" + item + "</li>");
   });

 });

});
