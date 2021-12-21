//Adicionar itens à lista
let botao = document.getElementById('criar-tarefa')

function addListItem(event){
    if(event.target === botao){
        let listItem = document.createElement('LI')
        let entrada = document.getElementById('texto-tarefa').value
        let translate = document.createTextNode(entrada)
        listItem.appendChild(translate)
        document.getElementById('lista-tarefas').appendChild(listItem)
        listItem.classList.add('lista')
        document.getElementById('texto-tarefa').value = '';
    }
}

botao.addEventListener('click', addListItem)

//Pintar de Cinza

let learn = document.getElementsByTagName('li')

document.addEventListener('click', function(event){
    let clico = document.querySelector('.clay')
    let grupo = document.getElementsByClassName('lista')    
        for (let i = 0; i < grupo.length; i++){   
            if(event.target === grupo[i]){  
                if(clico !== null){
                    clico.classList.remove('clay')
                    event.target.classList.add('clay')
                } else {
                    event.target.classList.add('clay')
                }
            } 
        }
    }
)

//Riscar o Item

let listaComp = document.getElementById('lista-tarefas')
//https://pt.stackoverflow.com/questions/9605/detectar-se-um-elemento-cont%C3%A9m-uma-classe-com-javascript-puro *contains

listaComp.addEventListener('dblclick', function(event){
        if(event.target.classList.contains('completed')){ 
            event.target.classList.remove('completed')
            event.target.classList.remove('clay')
        } else {
            event.target.classList.add('completed')
            event.target.classList.remove('clay')
        }
})

let apagar = document.getElementById('apaga-tudo')

apagar.addEventListener('click', function(event){
    let elem = document.getElementsByClassName('lista')
    for (let i = (elem.length - 1); i >= 0; i--){
        elem[i].parentNode.removeChild(elem[i])
    }
})