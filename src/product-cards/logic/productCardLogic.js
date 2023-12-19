import {
    updateTotalDiscount,
    updateTotalPrice,
    updateTotalProducts,
    updateTotalWithoutDiscount
} from "../../total/updateTotal.js";


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



export function calculatePrice(product, isChecked, total) {
    const priceWithDiscount = parseInt(product.priceWithDiscount.replace(/\s/g, ''), 10);
    const price = parseInt(product.price.replace(/\s/g, ''), 10);
    const productAmount = parseInt(product.count, 10);

    const parseAndSum = (value, addition) => (parseInt(value.replace(/\s/g, ''), 10) + addition).toLocaleString();

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

    console.log('Product count: ', total.totalProducts);
    console.log('total.priceWithoutDiscount: ', total.priceWithoutDiscount);

    updateTotalPrice(total.totalAmount);
    updateTotalWithoutDiscount(total.priceWithoutDiscount);
    updateTotalDiscount(total.discount);
    updateTotalProducts(total.totalProducts);
}
