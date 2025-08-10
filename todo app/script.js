
 const addTask = document.getElementById('add');
    const taskInput = document.getElementById('task');
    const tasksList = document.getElementById('tasks');
    addTask.addEventListener('click', function(){
      const task = taskInput.value;
      if(task !== ""){
        const newTask = document.createElement('li');
        const Delete=document.createElement('button')
        Delete.textContent="Delete"
        Delete.setAttribute('class','btn')
        Delete.addEventListener('click',function(){
          newTask.remove();
        
        }
      )
        newTask.textContent = task;
        newTask.appendChild(Delete);
        tasksList.appendChild(newTask);
        taskInput.value = "";
        }
        }); 