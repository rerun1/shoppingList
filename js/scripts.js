

var items = ["item1", "item2", "item3", "item4", "item5"];
var userItems = [];

var itemListSort = function(){

  items.forEach(function(item){
    var upperCaseItem = $("input#" + item).val().toUpperCase();
    userItems.push(upperCaseItem);
  });

  userItems.sort();

  return userItems

};

$(document).ready(function(){

 $("form#items").submit(function(event){
   event.preventDefault();

  $("ol").empty();
  $("form#items").hide();
  $("div#userList").show();

  itemListSort();
  
  userItems.forEach(function(item){
     $("ol").append("<li>" + item + "</li>");
  });

 });

});
