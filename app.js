// let AddInput = document.getElementById("AddInput") as HTMLInputElement
//     addBtn = document.getElementById("add") as HTMLButtonElement,
//     count = document.getElementsByClassName("count"),
//     todoList = document.getElementById("todoList") as HTMLUListElement,
//     clear = document.getElementById("clear") as HTMLElement,
//     todos:string[] = [];
//     runEvents()
// function runEvents() {
//     addBtn?.addEventListener("click", addTodo)
// }
// function allTodosEverywhere() {
//     const todoListesi = document.querySelectorAll(".list-group-item")
//     if (todoListesi.length > 0) {
//         todoListesi.forEach(function (todo) {
//             todo.remove()
//         })
//         todos = [];
//         localStorage.setItem("todos", JSON.stringify(todos))
//     }
// }
// function addTodo() {
//     const inputText: string = AddInput?.value.trim() || "";
//     if (inputText == null || inputText == "") {
//         alert("input giriniz")
//     }
//     else {
//         addTodoUi(inputText)
//     }
// }
// function addTodoUi(newTodo:string) {
//     if (todoList) {
//         todoList.innerHTML += `
//             <li>
//                 ${newTodo}
//                 <div class="icons">
//                     <i class="fa-solid fa-check"></i>
//                     <i class="fa-solid fa-trash"></i>
//                 </div>
//             </li>
//         `;
//     }
//     AddInput.value = "";
// }
// HTML'deki elementleri almak için değişkenler
var addInput = document.getElementById("AddInput");
var addBtn = document.getElementById("add");
var todoList = document.getElementById("todoList");
var doneList = document.getElementById("doneList");
// Todos'u saklamak için bir dizi
var todos = [];
var dones = [];
// Input değerini temizleme fonksiyonu
function clearInput() {
    addInput.value = "";
}
// Yapılacakları listeleme fonksiyonu
function renderTodos() {
    todoList.innerHTML = ""; // Eski listeyi temizle
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.textContent = todo;
        var iconsDiv = document.createElement("div");
        iconsDiv.classList.add("icons");
        var checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid", "fa-check");
        // Todo listesinden kaldırmak için doneTodo fonksiyonunu çağır
        checkIcon.addEventListener("click", function () { return doneTodo(todo); });
        var trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid", "fa-trash");
        // Silme ikonuna tıklanınca removeTodo fonksiyonunu çağır
        trashIcon.addEventListener("click", function () { return removeTodo(todo); });
        iconsDiv.appendChild(checkIcon);
        iconsDiv.appendChild(trashIcon);
        li.appendChild(iconsDiv);
        todoList.appendChild(li);
    });
    // Todo sayısını güncelle
    updateTodoCount();
}
// Yapılacakların sayısını güncelleme fonksiyonu
function updateTodoCount() {
    var todoCount = document.querySelector(".count");
    if (todoCount) {
        todoCount.textContent = todos.length.toString();
    }
}
// Yapılanları listeleme fonksiyonu
function renderDones() {
    doneList.innerHTML = ""; // Eski listeyi temizle
    dones.forEach(function (done) {
        var li = document.createElement("li");
        li.textContent = done;
        doneList.appendChild(li);
    });
    // Yapılan sayısını güncelle
    updateDoneCount();
}
// Yapılanların sayısını güncelleme fonksiyonu
function updateDoneCount() {
    var doneCount = document.querySelector(".done");
    if (doneCount) {
        doneCount.textContent = dones.length.toString();
    }
}
// Yeni bir todo eklemek için kullanılan fonksiyon
function addTodo() {
    var newTodo = addInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        renderTodos(); // Yapılacakları listele
        clearInput(); // Input değerini temizle
    }
    else {
        alert("Lütfen bir todo girin.");
    }
}
// Bir todo'yu "done" listesine taşımak için kullanılan fonksiyon
function doneTodo(todo) {
    var index = todos.indexOf(todo);
    if (index !== -1) {
        todos.splice(index, 1);
        dones.push(todo);
        renderTodos(); // Yapılacakları listele
        renderDones(); // Yapılanları listele
    }
}
// Bir todo'yu listeden kaldırmak için kullanılan fonksiyon
function removeTodo(todo) {
    var index = todos.indexOf(todo);
    if (index !== -1) {
        todos.splice(index, 1);
        renderTodos(); // Yapılacakları listele
    }
}
// "Ekle" butonuna tıklanınca addTodo fonksiyonunu çalıştır
addBtn.addEventListener("click", addTodo);
// Başlangıçta yapılacakları listele
renderTodos();
// Başlangıçta yapılanları listele
renderDones();
