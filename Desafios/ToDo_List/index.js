const botao = document.querySelector('.button-add-task');
const campo = document.querySelector('.input-task');
const lista = document.querySelector('.list-task');


let minhaListaDeItens = [];


function adicionarNovaTarefa(){
    if(campo.value === ''){
        alert("Digite algo para Adicionar")
        return;
    }
    
    minhaListaDeItens.push({
        tarefa:campo.value,
        concluida: false,
    })

    campo.value = ''

    mostrarTarefa()
}

function mostrarTarefa(){
    let novoItem = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novoItem = novoItem + `
        <li class="task ${item.concluida && 'done'}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarTarefa(${posicao})">
        </li>
        `
    })

    lista.innerHTML = novoItem;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefa();
}

function deletarTarefa(posicao){
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefa();
}

function recarregarTarefa(){
    const TarefaNoLocalStorage = localStorage.getItem('lista')

    if(TarefaNoLocalStorage){
        minhaListaDeItens= JSON.parse(TarefaNoLocalStorage)
    }

    mostrarTarefa()
}

recarregarTarefa()
botao.addEventListener('click', adicionarNovaTarefa)