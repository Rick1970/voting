$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

      if (age >= 65) {
        $('#senior').show();
      } else if (age >= 30 && age < 65) {
        $('#middle').show();
      } else if (age >= 1  && age < 30) {
        $('#junior').show();
      } else {
        alert("You must enter an age.");
      }

});
