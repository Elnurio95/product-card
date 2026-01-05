export class Modal {

    constructor(modalId, overlay) {
        this.modal = document.getElementById(modalId); 
        this.overlay = document.querySelector(overlay);
        this.initClose();
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('modal-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('modal-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    initClose() {
        const closeBtn = document.querySelector('.modal-close'); 
        closeBtn.addEventListener('click', () => {
            this.close();
        })
    }

}