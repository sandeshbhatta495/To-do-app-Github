const button = document.getElementById("submit");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.getElementById("taskInput");
  const task = input.value;
  if (!task) return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${task}</span>
    <button onclick="this.parentElement.remove()">Delete</button>
    <button onclick="editTask(this)">Edit</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
});

function editTask(button) {
  const span = button.parentElement.querySelector("span");
  const updated = prompt("Edit task:", span.textContent);
  if (updated) {
    span.textContent = updated;
  }
}