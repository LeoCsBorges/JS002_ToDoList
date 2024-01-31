//Global variables
var output = document.getElementById('output')
var toDoList = []


//Functions 
function mostrarLista() {
    output.innerHTML = toDoList.map((item, index) => `${index}. ${item} <br/>`).join('')
}

function inserir() {
    let item = window.prompt('Digite o item a ser adicionado na sua lista: ')
    if (item != undefined) toDoList.push(item + ' ( )')
        return mostrarLista()
}

function deletar() {
    let deleteItem = window.prompt('Digite o número do item da lista que deseja deletar: ')
    if (deleteItem != undefined) {
        if (deleteItem >= toDoList.length || deleteItem < 0) {
            window.alert('Número da lista inválido!')

        } else {
            toDoList.splice(deleteItem, 1)
        }
    }
        return mostrarLista()
}

function editar() {
    let editItem = window.prompt('Digite o número do item da lista que deseja editar: ')
    if (editItem != undefined) {
        if (editItem >= toDoList.length || editItem < 0) {
            window.alert('Número da lista inválido!')

        } else {
            let newItem = window.prompt('Digite o novo conteúdo a ser alterado: ')
            toDoList.splice(editItem, 1, newItem + ' ( )')
        }
    }
        return mostrarLista()
}

function checkar() {
    let checkItem = window.prompt('Digite o número do item da lista que deseja dar "check/uncheck": ')
    let string = ''
    let newString = ''

    if (checkItem != undefined) {
        if (checkItem >= toDoList.length || checkItem < 0) {
            window.alert('Número da lista inválido!')

        //verificar se o 'check' está vazio, e substituir por checked
        } else if (toDoList[checkItem].includes('( )')) {
                    string = toDoList[checkItem]
                    newString = string.replace('( )', '(&check;)')
                    toDoList[checkItem] = newString
                
                //se está 'checked', substituir por sem check
                } else if (toDoList[checkItem].includes(' (&check;)')) {
                    string = toDoList[checkItem]
                    newString = string.replace('(&check;)', '( )')
                    toDoList[checkItem] = newString
                }            
    }    
    return mostrarLista()
}

function apagar() {
    let deleteList = window.confirm('Deseja apagar toda a lista?')
    if (deleteList) toDoList = []
        return mostrarLista()
}
