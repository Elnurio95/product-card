export const productCardsArray = [
    {
        cardImg: 'moist-musse',
        skinType: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compound: [
            'активные натуральные комплексы', 
            'витамины С, А, РР, В И Е', 
            'солнцезащитные компоненты'
        ],
        cost: 2750, 
    },
    {
        cardImg: 'moist-mask',
        skinType: 'для нормальной кожи', 
        name: 'Увлажняющая маска',
        description: 'Способствует удерживанию влаги в верхних слоях кожи.',
        compound: [
            'воски',
            'минералы',
            'масла'
        ],
        cost: 3500, 
    },
    {
        cardImg: 'cleansing-gel',
        skinType: 'для нормальной кожи', 
        name: 'Гель для умывания',
        description: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
        compound: [
            'минералы',
            'витамины С, А, РР, В И Е', 
            'солнцезащитные компоненты'
        ],
        cost: 1650, 
    },    
    {
        cardImg: 'gift-set-1',
        skinType: 'для нормальной кожи', 
        name: 'Подарочный набор №1',
        description: 'Набор, состоящий из увлажняющего крема и маски.',
        compoundone: [
            'воски', 
            'минералы', 
            'масла'
        ],
        cost: 4750, 
    },
    {
        cardImg: 'gift-set-5', 
        skinType: 'для нормальной кожи', 
        name: 'Подарочный набор №5',
        description: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для',
        compound: [
            'воски', 
            'минералы', 
            'масла'
        ],
        cost: 7520, 
    },
]


function getCardsQuantity() {
    const cardsInput = prompt('Сколько карточек отобразить ?');
    const cardCount = cardsInput;

    if (!cardCount || cardCount < 1 || cardCount > 5) {
            alert('Ошибка! Введите число от 1 до 5'); 
            return getCardsQuantity(); 
        }
    return cardCount; 
}

const productsList = document.getElementById('productsList');
const productTemplate = document.getElementById('product'); 

function getAllCards(count) {
    productsList.innerHTML = ""; 
    const newProductCards = productCardsArray.slice(0, count); 

    newProductCards.forEach(productCard => {
    const productCardClone = productTemplate.content.cloneNode(true); 
    productCardClone.querySelector('.cardImg').src = productCard.cardImg; 
    productCardClone.querySelector('.skinType').textContent = productCard.skinType;
    productCardClone.querySelector('.name').textContent = productCard.name;
    productCardClone.querySelector('.description').textContent = productCard.description;
    productCardClone.querySelector('.compound').textContent = productCard.compound.join(', ');
    productCardClone.querySelector('.cost').textContent = `${productCard.cost} ₽`;  
    productsList.appendChild(productCardClone); 
    console.log(productsList); 
})
} 

document.addEventListener("DOMContentLoaded", () => {
    const count = getCardsQuantity();
    getAllCards(count);
});
