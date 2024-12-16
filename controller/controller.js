'use strict'

import View from '../view/view.js'
import { Cloth, Food } from '../model/product.js'
import Cart from '../model/cart.js'

let cart = new Cart()

export default class Controller {
    static showMenu() {
        View.showMenu()
    }

    static invalidInputMsg() {
        View.invalidInputMsg()
    }

    static cartEmptyMsg() {
        View.cartEmptyMsg()
    }

    static addClothToCart(name, price, quantity, size) {
        let product = new Cloth(name, price, size)
        cart.addProduct(product, quantity)
        View.productAddedMsg(name, quantity)
    }

    static addFoodToCart(name, price, quantity, expireDate) {
        let product = new Food(name, price, expireDate)
        cart.addProduct(product, quantity)
        View.productAddedMsg(name, quantity)
    }

    static deleteProductFromCart(name) {
        const isValid = cart.removeProduct(name)
        if (!isValid) {
            View.nameProductNotExists()
            return
        }
        View.productDeletedMsg(name)
    }

    static updateProductQuantity(name, quantity) {
        const isValid = cart.updateQuantity(name, quantity)
        if (!isValid) {
            View.nameProductNotExists()
            return
        }
        View.quantityUpdatedMsg(name, quantity)
    }

    static listProductsBought() {
        const items = cart.getList()
        if (items.length === 0) {
            View.cartEmptyMsg()
        } else {
            items.forEach(item => {
                if (item.product instanceof Cloth) {
                    View.listProductMsg('Cloth :', item.product.name, item.product.price, item.quantity, `Size: ${item.product.size}`)
                } else if (item.product instanceof Food) {
                    View.listProductMsg('Food :', item.product.name, item.product.price, item.quantity, `Expires: ${item.product.expireDate}`)
                }
            })
        }
    }

    static calculateTotalCost() {
        const totalPrice = cart.getTotalPrice()
        View.totalCostInCart(totalPrice)
    }

    static getTotalPrice() {
        return cart.getTotalPrice();
    }

    static payment(amount) {
        const totalPrice = cart.getTotalPrice()
        if (amount < totalPrice) {
            View.paymentInsufficient()
        } else if (amount - totalPrice > 0) {
            View.successButChange(amount, totalPrice)
            cart.clearCart()
        } else {
            View.successPayment(amount)
            cart.clearCart()
        }
    }
}
