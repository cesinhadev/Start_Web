function TarefaConcluida(cb){
    const tarefa = cb.closest('li');
    tarefa.remove();
}




function addTask(e){
    e.preventDefault();
    const inputTask = e.target.task;
    const textTask = inputTask.value.trim();

    if(textTask === ''){
        alert('A tarefa precisa de um nome');
        return;
    }
   
    
    const htmlTask =`
        <li>
            <input type="checkbox" onclick="finalizarTarefa(this)" />
            <span>${textTask}</span>
        </li>
    
    `;

    document.querySelector('.todo-list').insertAdjacentHTML('beforeend', htmlTask.trim());

    inputTask.value = ' ';
    
}