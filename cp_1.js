const form = document.getElementById("form");
const count = document.getElementById("count");
const tooltip = document.getElementById("tooltip");
const feedback = document.getElementById("feedback-display");

document.body.addEventListener("click", function () {
  console.log("Background Click");
});

form.addEventListener("click", function (e) {
  e.stopPropagation();
});

form.addEventListener("input", function (e) {
  count.textContent = "Characters: " + e.target.value.length;
});
 
form.addEventListener("mouseover", function (e) {
  if (e.target.id === "name") tooltip.textContent = "Name";
  if (e.target.id === "email") tooltip.textContent = "Email";
  if (e.target.id === "comments") tooltip.textContent = "Comments";
});

form.addEventListener("mouseout", function (e) {
  if (e.target.id === "name" || e.target.id === "email" || e.target.id === "comments") {
    tooltip.textContent = "";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let comments = document.getElementById("comments").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("commentsError").textContent = "";

  let valid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Required";
    valid = false;
  }
  if (!email) {
    document.getElementById("emailError").textContent = "Required";
    valid = false;
  }
  if (!comments) {
    document.getElementById("commentsError").textContent = "Required";
    valid = false;
  }

const entry = document.createElement("div");

const nameLine = document.createElement("p");
nameLine.textContent = "Name: " + name;

const emailLine = document.createElement("p");
emailLine.textContent = "Email: " + email;

const commentLine = document.createElement("p");
commentLine.textContent = "Comments: " + comments;

entry.appendChild(nameLine);
entry.appendChild(emailLine);
entry.appendChild(commentLine);

feedback.appendChild(entry);
});