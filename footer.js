const productsForm = document.querySelector('.products-form'); 
const customerEmail = document.querySelector('#customer-email'); 
const formBtn = document.querySelector('.formBtn'); 
const openModal = document.querySelector('.modal-btn'); 
const closeModal = document.querySelector('.modal-close');  
const overlay = document.querySelector('.overlay'); 
const btnAuth = document.querySelector('.modal-auth');
const modalForm = document.querySelector('.modal-form');
const modalInput = document.querySelector('.modal-form-input');

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
    overlay.classList.add("modal-showed");
})

closeModal.addEventListener(('click'), ()=> {
    overlay.classList.remove("modal-showed");
})

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('modal-showed');
    }
});

let user = null; 

btnAuth.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (!modalForm.checkValidity()) {
        alert("Форма заполнена неверно");
        return; 
    }

    const formData = new FormData(modalForm); 
    const data = Object.fromEntries(formData.entries()); 
    
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
