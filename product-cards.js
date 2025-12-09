export const productCardsArray = [
    {
        cardImg: './img/moist-musse.png',
        skinType: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compound: ['активные натуральные комплексы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты'],
        cost: 2750, 
    },
    {
        cardImg: './img/moist-mask.png',
        skinType: 'для нормальной кожи', 
        name: 'Увлажняющая маска',
        description: 'Способствует удерживанию влаги в верхних слоях кожи.',
        compound: ['воски', 'минералы', 'масла'],
        cost: 3500, 
    },
    {
        cardImg: './img/cleansing-gel.png',
        skinType: 'для нормальной кожи', 
        name: 'Гель для умывания',
        description: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
        compound: ['минералы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты'],
        cost: 1650, 
    },    
    {
        cardImg: './img/gift-set-1.png',
        skinType: 'для нормальной кожи', 
        name: 'Подарочный набор №1',
        description: 'Набор, состоящий из увлажняющего крема и маски.',
        compoundone: ['воски', 'минералы', 'масла'],
        cost: 4750, 
    },
    {
        cardImg: './img/gift-set-5.png', 
        skinType: 'для нормальной кожи', 
        name: 'Подарочный набор №5',
        description: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для',
        compound: ['воски', 'минералы', 'масла'],
        cost: 7520, 
    },
]

const productsList = document.getElementById('productsList');
const productTemplate = document.getElementById('product'); 

productCardsArray.forEach(productCard => {
    const productCardClone = productTemplate.content.cloneNode(true); 
    productCardClone.querySelector('.cardImg').src = productCard.cardImg; 
    productCardClone.querySelector('.skinType').textContent = productCard.skinType;
    productCardClone.querySelector('.name').textContent = productCard.name;
    productCardClone.querySelector('.description').textContent = productCard.description;
    productCardClone.querySelector('.compound').textContent = productCard.compound.join(', ');
    productCardClone.querySelector('.cost').textContent = `${productCard.cost} ₽`;  
    productsList.appendChild(productCardClone); 
})

