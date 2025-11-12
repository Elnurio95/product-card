//закрасить одну карточку 
const firstCard = document.querySelector('.card-container');
const changeFirstColorCardBtn = document.querySelector('#change-first-card-color-btn'); 
const firstCardColor = '#00FF00'; 

changeFirstColorCardBtn.addEventListener('click', () => {
    firstCard.style.backgroundColor = firstCardColor;  
}); 

//закрасить все карточки 
const productCards = document.querySelectorAll('.card-container'); 
const changeAllcardsColorBtn = document.querySelector('#change-cards-color-btn'); 
const allCardsColor = '#111'; 

changeAllcardsColorBtn.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = allCardsColor); 
}); 

//открыть гугл 
const btnOpenWindow = document.querySelector('#open-google'); 
btnOpenWindow.addEventListener('click', openGoogleBtn); 

function openGoogleBtn() {
    const answer = confirm('Вы дейстивтельно хотите открыть Google ?'); 

    if (answer === true) {
        window.open('https://google.com')
    } else {
        return; 
    }
}; 

//консоль лог 

const outputLogButton = document.querySelector('#output-console-log'); 

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4')); 

function outputConsoleLog(message) {
    alert(message); 
    console.log(message); 
}

//вывести контент элемента 

const mainTitle = document.querySelector('.main-title'); 
mainTitle.addEventListener('mousemove', () => console.log(mainTitle.textContent));

//смена цвета кнопки при нажатии 
 
const changeBtnColor = document.querySelector('#change-btn-color'); 


changeBtnColor.addEventListener('click', ()=> {
    changeBtnColor.classList.toggle('yellow');
})
