import { productCardsArray } from "./product-cards.js";
/*Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой*/

function getProductNamesArr() {
    productCardsArray.reduce((acc, curr) => {
    return acc + curr.name; 
}); 
};

getProductNamesArr();  

/* Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание */
function getProductDesc() {
    return productCardsArray.reduce((acc, curr) => {
        acc.push({ [curr.name]: curr.description });
        return acc;  
    }, []); 
}

getProductDesc(); 

/* Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if). */
                            
function getCardsQuantity() {
    const cardsInput = prompt('Сколько карточек отобразить ?');
    const cardCount = Number(cardsInput);

    if (!cardCount || cardCount < 1 || cardCount > 5) {
        alert('Ошибка! Введите число от 1 до 5');
        return getCardsQuantity();
    }
    return cardCount;
}

const productsList = document.getElementById('productsList');
const productTemplate = document.getElementById('product'); 

function displayCard(count) {
    productsList.innerHTML = ""; 
    const newProductCards = productCardsArray.slice(0, count); 

    newProductCards.forEach(productCard => {
    const productCardClone = productTemplate.content.cloneNode(true); 
    productCardClone.querySelector('.cardImg').src = `./img/${productCard.cardImg}.png`; 
    productCardClone.querySelector('.skinType').textContent = productCard.skinType;
    productCardClone.querySelector('.name').textContent = productCard.name;
    productCardClone.querySelector('.description').textContent = productCard.description;
    productCardClone.querySelector('.compound').textContent = productCard.compound;
    productCardClone.querySelector('.cost').textContent = `${productCard.cost} ₽`;  
    productsList.appendChild(productCardClone); 
    console.log(productsList); 
})
} 

document.addEventListener("DOMContentLoaded", () => {
    const count = getCardsQuantity(); 
    displayCard(count);
});
