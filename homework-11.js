class Drinks {
    constructor(name, volume, price, temperature) {
        this.name = name; 
        this.volume =volume; 
        this.price = price; 
        this.temperature = temperature; 
    }

    getInfo() {
        console.log(this.name, this.volume, this.price, this.temperature); 
    }

    getTemperature() {
        return this.temperature; 
    }

    setTemperature() {
        
    }

    prepareSpecialDrink() {

    }

    giveDrink() {

    }
}

class Limonad extends Drinks {
    constructor (name, volume, price, temperature) {
        super(name, volume, price, temperature); 
    }
}

class Coffee extends Drinks {
    constructor (name, volume, price, temperature) {
        super(name, volume, price, temperature); 
    }
}

class Tea extends Drinks {
    constructor (name, volume, price, temperature) {
        super(name, volume, price, temperature); 
    }
}

class Mojito extends Drinks {
    constructor (name, volume, price, temperature) {
        super(name, volume, price, temperature); 
    }
}

class MilkShake extends Drinks {
    constructor (name, volume, price, temperature) {
        super(name, volume, price, temperature); 
    }
}