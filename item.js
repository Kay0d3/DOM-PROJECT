let myForm = document.getElementById("my-form");
let myList = document.getElementById("my-list");
let mySearch = document.getElementById("search");

// 1. I CALLED THE SUBMIT BTN, which you didnt call
const submitBtn = document.getElementById("submitBtn");

myForm.addEventListener("submit", addItem);
myList.addEventListener("click", remeoveItem);
mySearch.addEventListener("keydown", searchItem);

// 2. This is suppose to be outside of the addItem function incase you need to use that inputValue again. and i didnt added the .value at the end of this.
let inputValue = document.getElementById("text");

submitBtn.addEventListener("click", addItem());

function addItem(e) {
  e.preventDefault();

  let newLi = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "X";

  // 3. i added the .value here
  newLi.textContent = inputValue.value;
  newLi.appendChild(deleteBtn);
  myList.appendChild(newLi);

  //4. Then lastly the inputvalue should be the last thing after all other functions have performed their actions, so you can now clear
  inputValue.value = "";
}

function remeoveItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("ARE YOU SURE?")) {
      var li = e.target.parentElement;
      myList.removeChild(li);
    }
  }
}

function searchItem(e) {
  var text = e.target.value.toLowerCase();
  let items = document.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
