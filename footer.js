import { Modal } from './Modal.js';
import { Form } from './Form.js';

const productsForm = document.querySelector('.products-form'); 
const customerEmail = document.querySelector('#customer-email'); 
const openModal = document.querySelector('.modal-btn'); 
const closeModal = document.querySelector('.modal-close');  
const btnAuth = document.querySelector('.modal-auth');
const modalForm = document.querySelector('.modal-form');

const authUser = new Modal('auth-user', '.overlay'); 
const form = new Form('modalId'); 

productsForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (!customerEmail.checkValidity()) {
        return; 
    }

    console.log({
        email: customerEmail.value.trim()
    }); 
}); 

openModal.addEventListener(('click'), ()=> {
    authUser.open();
})

closeModal.addEventListener(('click'), ()=> {
    overlay.close();
})

let user = null; 

btnAuth.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (!modalForm.checkValidity()) {
        alert("Форма заполнена неверно");
        return; 
    }
    const data = form.getValues()  
    
    if (data.password !== data.repeatPassword) {
        alert('Пароли не совпадают'); 
        return; 
    }

    user = {
        ...data, 
        createdOn: new Date(), 
    }

    console.log("Зарегистрирован пользователь: ", user); 
    overlay.classList.remove("modal-showed"); 
});
 