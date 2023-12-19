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
    let priceWithDiscount = Number(product.priceWithDiscount.replace(/\s/g, ''));
    let price = Number(product.price.replace(/\s/g, ''));
    let productAmount = product.count

    if (isChecked) {
        total.priceWithoutDiscount += price;
        total.discount += price - priceWithDiscount;
        total.totalAmount += priceWithDiscount;
        total.totalProducts += productAmount
    } else {
        total.priceWithoutDiscount -= price;
        total.discount -= price - priceWithDiscount;
        total.totalAmount -= priceWithDiscount;
        total.totalProducts -= productAmount
    }
    console.log('Product count: ', total.totalProducts);

    updateTotalPrice(total.totalAmount);
    updateTotalWithoutDiscount(total.priceWithoutDiscount);
    updateTotalDiscount(total.discount);
    updateTotalProducts(total.totalProducts);
}