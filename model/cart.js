'use strict'

export default class Cart {
    constructor() {
        this.items = []
    }

    addProduct(product, quantity) {
        this.items.push({ product, quantity })
    }

    removeProduct(productName) {
        const initialLength = this.items.length
        this.items = this.items.filter(item => item.product.name !== productName)
        if (this.items.length === initialLength) {
            return false
        }
        return true
    }

    updateQuantity(productName, newQuantity) {
        const foundItem = this.items.find(item => item.product.name === productName)
        if (foundItem) {
            foundItem.quantity = newQuantity
            return true
        }
        return false
    }

    getList() {
        return this.items.map(item => {
            return item
        })
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let item of this.items) {
            totalPrice += item.product.price * item.quantity
        }
        return totalPrice
    }

    clearCart() {
        this.items = [];
    }
}
