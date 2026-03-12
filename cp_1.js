const form = document.getElementById("form");
const count = document.getElementById("count");
const tooltip = document.getElementById("tooltip");
const feedback = document.getElementById("feedback-display");

document.body.addEventListener("click", function () {
  console.log("background");
});

form.addEventListener("click", function (e) {
  e.stopPropagation();
});

form.addEventListener("input", function (e) {
  if (e.target.id === "comments") {
    count.textContent = e.target.value.length;
  }
});