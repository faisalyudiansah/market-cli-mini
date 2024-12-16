'use strict'

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Cloth extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }
}

class Food extends Product {
    constructor(name, price, expireDate) {
        super(name, price)
        this.expireDate = expireDate
    }
}

export { Product, Cloth, Food }
