import { Modal } from './modal'

const modal = Modal()

//PEGAR TODOS OS BOTÕES QUE EXISTE COM A CLASSE CHECK
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.eventListener('click',event => {
        modal.open()
    })
})

//PEGAR QUANDO O "MARCAR COMO LIDO" FOR CLICADO


// ABRIR MODAL
modal.open()