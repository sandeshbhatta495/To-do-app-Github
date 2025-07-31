

const form = document.getElementById("taskInput");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const task = document.getElementById("taskInput");
    const taskname= name.value;

    const output= document.getElementById("outputArea");

    output.innerText = `${task}`
    output.innerHTML = `
    <strong>Entered Credentials:</strong><br>
     ${task}
    `;
})