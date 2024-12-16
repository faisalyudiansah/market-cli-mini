'use strict'

export default class View {
    static showMenu() {
        const menu = {
            1: "Add product to cart",
            2: "Delete product from cart",
            3: "Update product quantity",
            4: "List products bought",
            5: "Calculate total cost", 
            6: "Make payment",
            7: "Exit"
        }
        console.table(menu)
    }

    static invalidInputMsg() {
        console.log(`Your input is invalid`)
    }

    static nameProductNotExists() {
        console.log(`name product not exists`)
    }

    static productAddedMsg(name, quantity) {
        console.log(`${quantity} ${name}(s) added to cart.`)
    }

    static productDeletedMsg(name) {
        console.log(`${name} deleted from cart.`)
    }

    static quantityUpdatedMsg(name, quantity) {
        console.log(`Quantity of ${name} updated to ${quantity}.`)
    }

    static productNotFoundMsg(name) {
        console.log(`Product ${name} not found in cart.`)
    }

    static cartEmptyMsg() {
        console.log(`Your cart is empty.`)
    }

    static listProductMsg(productType, name, price, quantity, details) {
        console.log(`${productType} ${name} - Price: $${price} - Quantity: ${quantity} - ${details}`)
    }

    static totalCostInCart(totalPrice) {
        console.log(`Total cost in cart: Rp.${totalPrice}`)
    }

    static paymentInsufficient() {
        console.log("Payment insufficient")
    }

    static successButChange(amount, totalPrice) {
        console.log(`Change: Rp. ${amount - totalPrice}. Thank you!`)
    }

    static successPayment(amount) {
        console.log(`Your amount: Rp. ${amount}. Thank you!`)
    }
    
    static successPayment(amount) {
        console.log(`Your amount: Rp. ${amount}. Thank you!`)
    }
}
