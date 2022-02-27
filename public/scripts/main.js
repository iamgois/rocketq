import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//PEGAR TODOS OS BOTÕES QUE EXISTE COM A CLASSE CHECK
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener('click',event => {
        modal.open()
    })
})


const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event => {
        modal.open()
    })
})