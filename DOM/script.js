const Incrementbtn = document.getElementById("IncBtn");
console.log(Incrementbtn);

const paraCount = document.getElementById("count");
console.log(paraCount);
Incrementbtn.addEventListener("click", function () {
  let count = Number(paraCount.textContent);
  paraCount.textContent = count + 1;
});

const inputField = document.querySelector("#input1");
inputField.addEventListener("keydown", function (e) {
  const para = document.createElement("p");
  para.textContent = e.key;
  const div = document.getElementById("div");
  div.appendChild(para);
  console.log(para);
});

const input = document.getElementById("input2");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("remove");

addBtn.addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = input.value;
  list.appendChild(item);
});

removeBtn.addEventListener("click", () => {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
  }
});
console.log(inputField);

const headingText = document.getElementById("heading");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  headingText.style.color = "red";
  headingText.textContent = "<a>Link</a>";
});

headingText.addEventListener("mouseover", () => {
  headingText.style.fontFamily = "cursive";
});

headingText.addEventListener("mouseout", () => {
  headingText.style.fontFamily = "Times New Roman";
});

const box1 = document.getElementById("b1");
const box2 = document.getElementById("b2");
let player = "O";
box1.addEventListener("click", () => {
  if (box1.textContent) {
    return;
  }
  box1.textContent = player;
  if (player === "O") {
    player = "X";
  } else {
    player = "O";
  }
});
box2.addEventListener("click", () => {
  if (box2.textContent) {
    return;
  }
  box2.textContent = player;
  if (player === "O") {
    player = "X";
  } else {
    player = "O";
  }
});
