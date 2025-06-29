const taskInput= document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
//Добавить задачу
addBtn.onclick = function(){
    const text = taskInput.value.trim();
    if (text=== "") return;

    const li = document.createElement('li');
    li.textContent = text;

    //Кнопка удалить 
    const del = document.createElement('button');
    del.textContent = "Удалить";
    del.className = " delete";
    del.onclick = function(){
        li.remove();
    }
    li.appendChild(del);
    tasklist.appendChild(li);
    taskInput.value = "";
};

//Позволяет добавить задачу нажатием Enter
taskInput.addEventListener('keydown', function(e){
    if (e.key === "Enter"){
        addBtn.click();
    }
});
