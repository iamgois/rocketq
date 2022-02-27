export default function Modal(){


    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)
    
    // FUNCÇÃO DE ABRIR MODAL
    function open(){

        document.querySelector('.modal-wrapper').classList.add('active');

    }

    // FUNÇÃO DE FECHAR A MODAL
    function close(){

        modalWrapper.classList.remove('active')

    }

    return {
        open,
        close
    }
}