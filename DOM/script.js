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
