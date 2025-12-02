//Задача 1 
/*Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль "Сейчас в X температура  — Y градусов по Цельсию" */ 

function showCityTemperature(city, temp) {
    console.log(`Сейчас в ${city} температура ${temp} градусов по Цельсию`); 
}

showCityTemperature('Москва', 5); 

//Задача 2

/*Создать переменную, которая хранит внутри себя скорость звука (гуглим). Создать функцию, которая принимает 1 параметр - скорость, внутри функции происходит проверка: если переданная скорость выше скорости звука - выводим лог "Сверхзвуковая скорость", если ниже - "Дозвуковая скорость" */

const SPEEDOFSOUND = 343; 

function compareValue(speed) {
    if (speed > SPEEDOFSOUND) {
        console.log("Сверхзвуковая скорость");
    } else {
        console.log("Дозвуковая скорость");
    }
}

compareValue(343); 

//Задача 3 
/* Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену (на ваше усмотрение). Далее создаем функцию, которая принимает 1 параметр - текущий бюджет, внутри функции происходит проверка: если бюджет превышает цену товара - выводим лог "(ваше название товара) приобретён. Спасибо за покупку!", если нет - обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс". */

const productName = 'code courses'; 
const productPrice = 10000; 

function buyProduct(myBudget) {
    if (myBudget > productPrice) {
        console.log(`${productName} приобретен. Спасибо за покупку!`);
    } else {
        const moneyDifference = myBudget - productPrice; 
        console.log(`Вам не хватает ${moneyDifference}$, пополните баланс.`)
    }
}

buyProduct(2000); 

 /* создать 1 функцию и именовать её по своему усмотрению */ 
 function getHomework(taskName, taskNumber, taskControlerName) {
    console.log(`Это задание называется: ${taskName}, номер задания: ${taskNumber}, а проверил преподаватель по имени ${taskControlerName}`); 
 }

 getHomework('домашка', 12, 'Влад'); 

/* Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению */ 
const taskName = 'homework'; 
const taskNumber = 5; 
const taskControlerName = 'Vlad'; 



