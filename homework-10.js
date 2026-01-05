import { Coffee } from "./Coffee.js";
import { BrandCoffee } from "./BrandCoffee.js";

const columbia = new Coffee('Columbia'); 
const kenya = new BrandCoffee('Kenya', 'светлой', 'French Bakery'); 
kenya.determineBrand();
kenya.determine(); 
columbia.determine(); 
