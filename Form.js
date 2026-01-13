export class Form {

    constructor(modalId) {
        this.modal = document.getElementById(modalId);
    }

    getValues() {
        const formData = new FormData(this.modal); 
        return data = Object.fromEntries(formData.entries()); 
    }

    isValid() {
        return this.modal.checkValidity(); 
    }

    reset() {
        this.modal.reset(); 
    }

}