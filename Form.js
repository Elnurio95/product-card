export class Form {
    constructor(modalId) {
        this.modalId = document.getElementById(modalId);
    }

    getValues() {
        const formData = new FormData(this.modalId); 
        return data = Object.fromEntries(formData.entries()); 
    }

    isValid() {
        return this.modalId.checkValidity(); 
    }

    reset() {
        this.modalId.reset(); 
    }
}