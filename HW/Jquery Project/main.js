$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");

$("#snackList").click(function(){
  $("#snacks").toggle();
});
$("#yankeestadium").mouseover(function(){
  $("#website").css("background-color","orange");
});
$("#title").click(function(){
  $("#title").html("Yankee's Suck");
});

})
