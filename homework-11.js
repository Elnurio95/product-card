import { Cafe } from "./Cafe.js";
import { Coffee } from "./Coffee.js";
import { Drink } from "./Drink.js";
import { Lemonade } from "./Lemonade.js";
import { MilkShake } from "./MilkShake.js";
import { Mojito } from "./Mojito.js";

const infoCafe = new Cafe("My Bakery", "Москва"); 
infoCafe.getCafeInfo(); 

const drinkOrder = new Drink("Флетвайт", "350 мл", "280 рублей", 80); 

drinkOrder.getInfo();

infoCafe.makeOrder(drinkOrder);

const lemonade = new Lemonade("Лимонад", "500 мл", "300 рублей", "апельсин", "2"); 

console.log(lemonade.fruitsQuantity)

const espresso = new Coffee("Эспрессо", "150 мл", "200 рублей", "Бразиилия"); 

console.log(espresso.getBeansType());

const milkTemp = new MilkShake("Молоко", "600 мл", "400 рублей", "Натуральное молоко");

milkTemp.setMilkTemp(80); 

const mojito = new Mojito("Махито", "700 мл", "900 рублей", "безалкогольный"); 

console.log(mojito.isAlcoholic()); 