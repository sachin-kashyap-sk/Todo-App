const todoArray = ["todoOne", "todoTwo", "todoThree", "todoFour"];
const todoList = document.querySelector(".todoList");
const newTodo = document.querySelector(".newTodo");
const addBtn = document.querySelector(".fa-plus");

const todoRemove = (index) => {
  todoArray.splice(index, 1);
  todoList.innerHTML = generateNumber();
};
const generateNumber = () => {
  let value = "";
  for (let i = 0; i < todoArray.length; i++) {
    value =
      value +
      `<li>
      ${todoArray[i]}<span class="icon"onClick=todoRemove(${i})><i class="fas fa-trash"></i> </span>
    </li>`;
  }
  return value;
};
todoList.innerHTML = generateNumber();

addBtn.addEventListener("click", () => {
  const currentValue = newTodo.value;
  if (!currentValue) {
    return;
  }
  todoArray.push(currentValue);
  todoList.innerHTML = generateNumber();
  newTodo.value = "";
});
