$(document).ready(function(){

  $("#critters").submit(function(event) {
    event.preventDefault();
    var select_value = $("#selection").val();

    // Conditional Statement
    if (select_value != "") {
      $(location).attr('href', select_value + '.html')
    } else {
      alert("That didnt work");
    }
  });

});
