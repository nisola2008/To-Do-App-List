const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
    if(inputBox.value === '') {
        showToast("Input your today's tasks")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    //to make our input field go immediately i press button
    inputBox.value = ""
     saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
         saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
         saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
function showToast(message, type = "success") {
    console.log("Toast call function");
    const container = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.classList.add("toast", type);
    toast.innerHTML = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}