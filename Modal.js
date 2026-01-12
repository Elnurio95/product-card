export class Modal {

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.closeButton = null;
 
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onCloseButtonClick = this.onCloseButtonClick.bind(this);

    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    
    this.#initClose();
    
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.onOverlayClick);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.onOverlayClick);
    }
    
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.onCloseButtonClick);
      this.closeButton = null;
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  onOverlayClick() {
    this.close();
  }

  onCloseButtonClick() {
    this.close();
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        this.open();
      });
    }
  }

  #initClose() {
    this.closeButton = this.modal.querySelector('#modal-close-button');
    
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.onCloseButtonClick);
      this.closeButton.addEventListener('click', this.onCloseButtonClick);
    }
  }
}