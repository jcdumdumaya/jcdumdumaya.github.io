let ul = document.getElementById("ul"); //get the main list. capture ul element
let addBtn = document.getElementById("add-btn"); //targets the button
let todoInput = document.getElementById("todo-input"); //targets the input
let warning = document.getElementById("warning");

addBtn.addEventListener("click", function (e) {
  e.preventDefault(); //prevents form from submitting
  if (todoInput.value == "") {
    warning.innerHTML = "Please enter a task";
    return false;
  } else {
    warning.innerHTML = "";
  }
  const todoList = document.createElement("div"); //Creates the div element
  todoList.classList.add("todo-list"); //Adds the class "todo-list" to the created DIV
  ul.appendChild(todoList); //Adds the div to the UL

  let list = document.createElement("li"); //creates the li element
  list.innerHTML = todoInput.value; //adds the inputted text value to the li
  todoList.appendChild(list); //adds the created element to UL
  todoInput.value = ""; //clears the placeholder after entering value

  //Creates the element button
  const checkButton = document.createElement("button"); //creates the button element
  checkButton.type = "button"; //changes the button type to button
  checkButton.innerHTML = "Delete"; //puts the delete text on the button
  checkButton.classList.add("checkbutton"); //add the checkbutton class
  todoList.appendChild(checkButton);

  //Changes the style of the DIV when it appears
  todoList.style = ` background-color: white;
  border: black solid 1px;
  border-radius: 5px;
  opacity:1;`;

  //Clicking on the button removes the DIV
  checkButton.addEventListener("click", function () {
    ul.removeChild(todoList);
    setTimeout(function () {
      list.style.opacity = 1;
    }, 1);
  });
});
