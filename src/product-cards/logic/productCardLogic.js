import {
    updateTotalDiscount,
    updateTotalPrice,
    updateTotalProducts,
    updateTotalWithoutDiscount
} from "../../total/updateTotal.js";
import {cards} from "../../state/cards.js";


export function removeProduct(product, listItem, header, cards) {
    if (cards.products.length === 1 && header) {
        header.remove();
    }

    const indexToRemove = cards.products.findIndex(p => p.id === product.id);
    if (indexToRemove !== -1) {
        cards.products.splice(indexToRemove, 1);
    }

    listItem.remove();
}

const parseAndSum = (value, addition) => (parseInt(value.replace(/\s/g, ''), 10) + addition).toLocaleString();
const stringToNumber = (value) => parseInt(value.replace(/\s/g, ''), 10);
export function calculatePrice(product, isChecked, total) {
    const priceWithDiscount = stringToNumber(product.priceWithDiscount);
    const price = stringToNumber(product.price);
    const productAmount = parseInt(product.count, 10);

    if (isChecked) {
        total.priceWithoutDiscount = parseAndSum(total.priceWithoutDiscount, price);
        total.discount = parseAndSum(total.discount, price - priceWithDiscount);
        total.totalAmount = parseAndSum(total.totalAmount, priceWithDiscount);
        total.totalProducts = parseAndSum(total.totalProducts, productAmount);
    } else {
        total.priceWithoutDiscount = parseAndSum(total.priceWithoutDiscount, -price);
        total.discount = parseAndSum(total.discount, -(price - priceWithDiscount));
        total.totalAmount = parseAndSum(total.totalAmount, -priceWithDiscount);
        total.totalProducts = parseAndSum(total.totalProducts, -productAmount);
    }

    updateTotalPrice(total.totalAmount);
    updateTotalWithoutDiscount(total.priceWithoutDiscount);
    updateTotalDiscount(total.discount);
    updateTotalProducts(total.totalProducts);
}

export function selectAll(isChecked, total) {
    let priceWithoutDiscount = cards.products.reduce((acc,prod) => {
        return acc += stringToNumber(prod.price)
    },0 )
    let totalAmount = cards.products.reduce((acc,prod) => {
        return acc += stringToNumber(prod.priceWithDiscount)
    },0 )
    console.log(priceWithoutDiscount)
    if (isChecked) {
        total.priceWithoutDiscount = priceWithoutDiscount;
        total.discount = '200 940';
        total.totalAmount = totalAmount;
        total.totalProducts = 203;
    } else {
        total.priceWithoutDiscount = '0';
        total.discount = '0';
        total.totalAmount = '0';
        total.totalProducts = '0';
    }
    updateTotalPrice(total.totalAmount);
    updateTotalWithoutDiscount(total.priceWithoutDiscount);
    updateTotalDiscount(total.discount);
    updateTotalProducts(total.totalProducts);
}