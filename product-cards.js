export const productCardsArray = [
    {
        purpose: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compoundone: 'активные натуральные комплексы',
        compoundtwo: 'витамины С, А, РР, В И Е', 
        compoundthree: 'солнцезащитные компоненты', 
        cost: '2 750', 
    },
    {
        purpose: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compoundone: 'активные натуральные комплексы',
        compoundtwo: 'витамины С, А, РР, В И Е', 
        compoundthree: 'солнцезащитные компоненты', 
        cost: '2 750', 
    },
    {
        purpose: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compoundone: 'активные натуральные комплексы',
        compoundtwo: 'витамины С, А, РР, В И Е', 
        compoundthree: 'солнцезащитные компоненты', 
        cost: '2 750', 
    },    
    {
        purpose: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compoundone: 'активные натуральные комплексы',
        compoundtwo: 'витамины С, А, РР, В И Е', 
        compoundthree: 'солнцезащитные компоненты', 
        cost: '2 750', 
    },
    {
        purpose: 'для нормальной кожи', 
        name: 'Увлажняющий мусс',
        description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        compoundone: 'активные натуральные комплексы',
        compoundtwo: 'витамины С, А, РР, В И Е', 
        compoundthree: 'солнцезащитные компоненты', 
        cost: '2 750 ', 
    },
]

const productsList = document.getElementById('productsList');
const productTemplate = document.getElementById('product'); 

productCardsArray.forEach(productCard => {
    const productCardClone = productTemplate.content.cloneNode(true); 
    productCardClone.querySelector('.purpose').textContent = productCard.purpose;
    productCardClone.querySelector('.name').textContent = productCard.name;
    productCardClone.querySelector('.description').textContent = productCardsArray.description;
    productCardClone.querySelector('.compoundone').textContent = productCardsArray.compoundone;
    productCardClone.querySelector('.compoundtwo').textContent = productCardsArray.compoundtwo;
    productCardClone.querySelector('.compoundthree').textContent = productCardsArray.compoundthree;
    productCardClone.querySelector('.cost').textContent = `${productCardsArray.cost} ₽`;
    productsList.appendChild(productCardClone); 
})

