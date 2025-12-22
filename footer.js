const productsForm = document.querySelector('.products-form'); 
const customerEmail = document.querySelector('#customer-email'); 
const formBtn = document.querySelector('.formBtn'); 
const openModal = document.querySelector('.modal-btn'); 
const closeModal = document.querySelector('.modal-close');  
const overlay = document.querySelector('.overlay'); 

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
    overlay.classList.remove("modal-shwed");
})

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('modal-showed');
    }
});
