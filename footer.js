const productsForm = document.querySelector('.products-form'); 
const customerEmail = document.querySelector('#customer-email'); 
const formBtn = document.querySelector('.formBtn'); 
const register = document.querySelector('.register'); 
const modal = document.querySelector('.modal'); 
const modalShowed = document.querySelector('.modal-showed'); 

productsForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (!customerEmail.checkValidity()) {
        return; 
    }

    console.log({
        email: customerEmail.value.trim()
    }); 
}); 

register.addEventListener('click', ()=> {
    modal.classList.add('modal-showed');   
})
