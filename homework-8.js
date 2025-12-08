/*Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой*/
import { productCardsArray } from "./product-cards";

function productNamesArr() {
    productCardsArray.reduce((acc, curr) => {
    return acc + curr.name; 
}); 
};

console.log(productNamesArr); 

/* Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание */
function productDesc() {
    return productCardsArray.reduce((acc, curr) => {
        acc.push({ [curr.name]: curr.description });
        return acc;  
    }, []); 
}

productDesc(); 

/* Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if). */

