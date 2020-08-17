$(document).ready(function(){
  $("form#grocery").submit(function(event){
    event.preventDefault();
    const item1 = $("input#item1").val();
    const item2 = $("input#item2").val();
    const item3 = $("input#item3").val();
    const item4 = $("input#item4").val();
    const item5 = $("input#item5").val();
    const groceryItems = [item1, item2, item3, item4, item5];
    groceryItems.sort


    groceryItems.forEach(function(element){
      $("#grocery-list").append("<li>" + element.toUpperCase() + "</li>");
    });
    $("form#grocery").hide();
    $(".output").show();
  });
});