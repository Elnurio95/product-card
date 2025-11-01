const green = '#00FF00'; 
const black = '#111'; 

//закрасить одну карточку 
const firstCard = document.querySelector('.card-container');
const changeFirstColorCardBtn = document.querySelector('#change-first-card-color-btn'); 

changeFirstColorCardBtn.addEventListener('click', () => {
   firstCard.style.backgroundColor = green;  
}); 

//закрасить все карточки 
const productCards = document.querySelectorAll('.card-container'); 
const changeAllcardsColorBtn = document.querySelector('#change-cards-color-btn'); 

changeAllcardsColorBtn.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = black); 
    console.log('hello');
}); 

//открыть гугл 
const openWindow = document.querySelector('#open-google'); 
openWindow.addEventListener('click', openGoogleBtn); 

function openGoogleBtn() {
    const answer = confirm('Вы дейстивтельно хотите открыть Google ?'); 

    if (answer === true) {
        window.open('https://google.com')
    } else {
        return; 
    }
}; 

//консоль лог 

const outputLOgButton = document.querySelector('#output-console-log'); 

outputLOgButton.addEventListener('click', () => outputConsoleLog('ДЗ №4')); 

function outputConsoleLog(message) {
    alert(message); 
    console.log(message); 
}

//вывести контент элемента 

const contentElement = document.querySelector('.main-title'); 
contentElement.addEventListener('mousemove', () => console.log(contentElement.textContent));

//смена цвета кнопки при нажатии 
 
const changeBtnColor = document.querySelector('#change-btn-color'); 

changeBtnColor.addEventListener('click', ()=> {
    changeBtnColor.classList.toggle('yellow');
})