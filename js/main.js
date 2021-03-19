let post = document.getElementById("ButtonPost");
let clear = document.getElementById("clearButton");
let mark = document.getElementById("markAllButton");
let del = document.getElementById("deleteButton");

function todoPost(e){
    e.preventDefault();
    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    var currentListHTML = list.innerHTML;
    if (todo !== ""){
        list.innerHTML = currentListHTML + `<input type = "checkbox" name = "todo" /> ${todo} <br>`
        document.getElementById("todoText").value = "";
    }

}

function todoClear(e){
    var todos = document.getElementsByName("todo");
    
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }
}

function todoMark(e){
    var todos = document.getElementsByName("todo");
    
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
}

function todoDel(e){
    document.getElementById("todoList").innerHTML = "";
}

post.addEventListener("click", todoPost);
clear.addEventListener("click", todoClear);
mark.addEventListener("click", todoMark);
del.addEventListener("click", todoDel);