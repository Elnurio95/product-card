const productsForm = document.querySelector('.products-form'); 
const customerEmail = document.querySelector('#customer-email'); 
const formBtn = document.querySelector('.formBtn'); 

productsForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (!customerEmail.checkValidity()) {
        return; 
    }

    console.log({
        email: customerEmail.value.trim()
    }); 
}); 

