$(document).ready(function() {
  $("body").css("background-color", "#51d0de");
  $("#rules").css("display", "none");
  $("#rules").css("position", "relative");
  $("#showRules").click(function(e) {
    e.preventDefault();
    $("#rules").toggle(1000);
    //   $(test).toggle();
    // $("#rules").css("z-index", 1);
    $("rules").css("z-index", 1);
    $("rules").css("top", 0);
  });
  $("#guessedNumber").text("hello");
  $("#guessedNumber").css("background-color", "white");
  $("#userScore").text("hello");
});
