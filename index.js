// var hello = document.querySelectorAll("h1");

// console.log(hello.length);

// $("h1").css("color", "red");
$("h1").addClass("big-text");
$("h1").css("color", "red");

// hover effect
$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});

// // toggle jquery
// $("h1").toggle(
//   function () {
//     console.log("First click for .toggle() called.");
//   },
//   function () {
//     console.log("Second click for .toggle() called.");
//   }
// );
//

$("h1").before("<button>Click me</button>");
$("h1").after("<h3>H3 text</h3>");
