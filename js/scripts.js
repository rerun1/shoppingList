

$(document).ready(function(){

 $("form#items").submit(function(event){
   event.preventDefault();


   var items = ["item1", "item2", "item3", "item4", "item5"];
   var userItems = [];

   items.forEach(function(item){
     userItems.push($("input#" + item).val());
   });


   console.log(userItems);



 });

});
