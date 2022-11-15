$("document").ready(function () {
  $("#slidedownButton").click(function () {
    $("p").slideDown("slow");
  });
  $("#slideupButton").click(function () {
    $("p").slideUp("slow", "linear");
  });
  $("#toggleButton").click(function () {
    $("p").slideToggle("fast", afterCompletion);
  });
});

function afterCompletion() {
  console.log("animation finished");
}
