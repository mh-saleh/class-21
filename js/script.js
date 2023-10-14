let arr = [
  {
    name: "hello",
    age: "40",
    address: "Dhaka",
  },

  {
    name: "hello",
    age: "40",
    address: "Dhaka",
  },

  {
    name: "hello",
    age: "40",
    address: "Dhaka",
  },
];

console.log(arr[1]["name"]);

function printing() {
  console.log("Hello World 1");
  console.log("Hello World 2");
}

printing();

let array1 = [1, 2, 3, 4, 5];
array1.map(function (i) {
  console.log(i);
});

let text = document.querySelector("h1");
// console.log(text.innerHTML);
let button = document.querySelector(".h1");
button.addEventListener("click", function () {
  text.style.fontSize = "100px";
  text.style.color = "teal";
  text.style.background = "tomato";
});

$(".addColor").click(function () {
  $(".box").addClass("boxTwo");
});

$(".removeColor").click(function () {
  $(".box").removeClass("boxTwo");
});

$(".addRemoveColor").click(function () {
  $(".box").toggleClass("boxTwo");
});

$(".hide").click(function () {
  $(".box").hide(2000);
});
$(".show").click(function () {
  $(".box").show(2000);
});

$(".toggle").click(function () {
  $(".box").toggle(2000);
});
$(".slideUp").click(function () {
  $(".box").slideUp(2000);
});
$(".slideDown").click(function () {
  $(".box").slideDown(2000);
});
