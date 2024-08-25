const oneEl = document.getElementById('one');
const btnEl = document.getElementById('btn');
const list = document.getElementById('list');

btnEl.addEventListener('click', () => {
    
    const taskText = oneEl.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); 
   

    const task = document.createElement('li');
    task.className = 'task-item';

    // Create a span for the task text
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    // Create a span for the date
    const dateSpan = document.createElement('span');
    dateSpan.textContent = formattedDate;
    dateSpan.style.display = 'block'; 
    dateSpan.style.fontSize = '0.9em'; 

    const completebtn = document.createElement('button');
    completebtn.textContent = 'Complete';
    completebtn.className = 'button complete-button';

    completebtn.addEventListener('click', () => {
        textSpan.style.textDecoration = 'line-through';
    });

    
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.className = 'button delete-button';
    deletebtn.addEventListener('click', () => {
        task.remove();
    });

    
    task.appendChild(textSpan);
    task.appendChild(dateSpan);
    task.appendChild(completebtn);
    task.appendChild(deletebtn);

    
    list.appendChild(task);

    
    oneEl.value = '';
});

