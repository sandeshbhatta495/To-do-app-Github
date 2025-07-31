const button = document.getElementById("submit");
button.addEventListener("click", function(e){

    e.preventDefault();
    const input= document.getElementById("taskInput");
    const task= input.value;

    const li = document.createElement("li");
    li.innerHTML = `
    <span>${task}</span>
    <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `

    const ulcontainer = document.getElementById("taskList");
    ulcontainer.appendChild(li);
    
    input.value=``
})

function removeTask(button){
    button.parentElement.remove();
}