'use strict'

import { createInterface } from 'readline/promises'
import Controller from './controller/controller.js'

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const startApp = async () => {
    let exit = false;
    while (!exit) {
        Controller.showMenu();
        const userRes = await readline.question('Choose: ')

        switch (userRes) {
            case "1":
                await addProduct();
                break;
            case "2":
                await deleteProduct();
                break;
            case "3":
                await updateProduct();
                break;
            case "4":
                await listProducts();
                break;
            case "5":
                await calculateTotalCost();
                break;
            case "6":
                await makePayment();
                break;
            case "7":
                exit = true;
                break;
            default:
                Controller.invalidInputMsg();
                break;
        }
    }
    readline.close()
}

const addProduct = async () => {
    const type = await readline.question('Enter product type (1 for Cloth, 2 for Food): ')
    const name = await readline.question('Enter product name: ')
    const price = parseFloat(await readline.question('Enter product price: '))
    const quantity = parseInt(await readline.question('Enter product quantity: '))

    if (type === '1') {
        const size = await readline.question('Enter cloth size: ')
        Controller.addClothToCart(name, price, quantity, size)
    } else if (type === '2') {
        const expireDate = await readline.question('Enter food expire date (YYYY-MM-DD): ')
        Controller.addFoodToCart(name, price, quantity, expireDate)
    } else {
        Controller.invalidInputMsg()
    }
}

const deleteProduct = async () => {
    const name = await readline.question('Enter product name to delete: ')
    Controller.deleteProductFromCart(name)
}

const updateProduct = async () => {
    const name = await readline.question('Enter product name to update: ')
    const quantity = parseInt(await readline.question('Enter new quantity: '))
    Controller.updateProductQuantity(name, quantity)
}

const listProducts = async () => {
    Controller.listProductsBought()
}

const calculateTotalCost = async () => {
    Controller.calculateTotalCost()
}

const makePayment = async () => {
    const totalPrice = Controller.getTotalPrice()
    if (totalPrice === 0) {
        Controller.cartEmptyMsg()
        return
    }
    const amount = await readline.question('Payment, Enter amount: ')
    Controller.payment(amount)
}

startApp()
