var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
    if (input === "list") {
        listToDos();
    } else if (input === "new") {
        addToDo();
    } else if (input === "delete") {
        deleteToDo();
    }

    input = prompt("What would you like to do?");
}
console.log("Goodbye!");

function listToDos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addToDo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteToDo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index , 1);
    console.log("Deleted todo");
}

