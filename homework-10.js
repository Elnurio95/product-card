class Coffee {
    constructor(country, roasting) {
        this.country = country; 
        this.roasting = roasting; 
    }

    determine() {
        console.log(`${this.country} - кофе ${this.roasting} обжарки`);
    }
}
class BrandCoffee extends Coffee {
    constructor(country, roasting, brand) {
        super(country, roasting);
        this.brand = brand; 
    }

    determineBrand()  {
        console.log(`${this.country} ${this.roasting} - ${this.brand} брендированный сорт кофе`);  
    }
}

const kenya = new BrandCoffee('Kenya', 'светлой', 'French Bakery'); 
kenya.determineBrand();
kenya.determine()
