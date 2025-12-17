import { mediaComments } from "./comments";


//Уровень 1
/*Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5. */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const filtered = array.filter(item => item >= 5); 
console.log(filtered); 

/* Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.*/

const fruits = ['яблоко', 'груша', 'малина', 'виноград', 'ананас', 'клубника']; 

console.log(fruits.includes('ананас')); 

/* Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть. */ 

function reverseArray(array) {
    console.log(array.reverse()); 
}

reverseArray(array); 

//Уровень 2 

/* Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива. Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)*/

/* Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com" */

function includeMailsCom() {
    const result = mediaComments.filter((item) => item.email.includes('.com')); 
    return result; 
}

includeMailsCom(); 

/* Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1*/

function changePostId() {
  mediaComments.map((item) => ({
    ...item, 
    postId: item.id <= 5 ? 2 : 1
  }));
}

changePostId();


/* Перебрать массив, что бы объекты состояли только из айди и имени */
function updateArr() {
  const newArr = mediaComments.map(item => ({
    id: item.id, 
    name: item.name, 
  }))
}

updateArr(); 

/* Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */

function addProperty() {
  const validArr = mediaComments.forEach(item => {
    item.body.length > 180 ? item.isInvalid = true : item.isInvalid = false; 
  })
}

addProperty();

// Уровень 3:

//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

function getMails() {
  const mailsArr = mediaComments.map(item => item.email);  
  return mailsArr; 
}

getMails(); 

const getMailsByReduce = () =>
  mediaComments.reduce((acc, currentValue) => [...acc, currentValue.email], []);

getMailsByReduce(); 



//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

function convertToString() { 
  return mailsArr.join("\n").toString(); 
}

convertToString(); 

