export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId); 
        this.markClose();
    }

    open() {
        this.modal.classList.add('modal-showed'); 
    }

    close() {
        this.modal.classList.remove('modal-showed');
    }

    controleOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    markClose() {
        const closeBtn = document.querySelector('.modal-close'); 
        closeBtn.addEventListener('click', () => {
            this.close();
        })
    }
}