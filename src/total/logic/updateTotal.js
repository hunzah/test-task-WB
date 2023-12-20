import {total} from '../../state/total.js'

export function updateTotalPrice(value) {
    const totalPriceElement = document.querySelector('.total-info-price-text');
    if (totalPriceElement) {
        totalPriceElement.textContent = `${value} ${total.currency}`;
    }
}
export function updateTotalWithoutDiscount(value) {
    const totalPriceWithoutDiscountElement = document.getElementById('prod-price-amount');
    if (totalPriceWithoutDiscountElement) {
        totalPriceWithoutDiscountElement.textContent = `${value} ${total.currency}`;
    }
}
export function updateTotalDiscount(value) {
    const totalDiscountElement = document.getElementById('prod-discount-amount');
    if (totalDiscountElement) {
        totalDiscountElement.textContent = `${value} ${total.currency}`;
    }
}
export function updateTotalProducts(value) {
    const totalDiscountElement = document.getElementById('prod-amount');
    if (totalDiscountElement) {
        totalDiscountElement.textContent = `${value} товара`;
    }
}


