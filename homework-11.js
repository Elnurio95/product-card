import { Cafe } from "./Cafe.js";
import { Drinks } from "./Drinks.js";

const infoCafe = new Cafe("My Bakery", "Москва"); 
infoCafe.getInfoCafe(); 

const drinkOrder = new Drinks("Флетвайт", "350 мл", "280 рублей", 80); 

drinkOrder.getInfo();

infoCafe.makeOrder(drinkOrder);

