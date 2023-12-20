import {payMethod} from "../../state/pay-method/payMethod.js";

export function payMethodTemplate() {
    console.log(payMethod.selectedCard)
    return `
    <div class="payment-method-container">
        <div class="payment-method-header">
            <div class="payment-method-header-text-container">
                <span class="payment-method-header-text">Способ оплаты</span>
                <button id="change-payment-method-button" class="delivery-method-header-button">Изменить</button>
            </div>
        </div>
        <div class="payment-method-main">
            <div class="payment-method-main-content">
                <div class="payment-method-main-image-container">
                    <img class="payment-method-main-image" alt="mir-card"src="${payMethod.selectedCard.img}"/>
                </div>
                <div class="payment-method-main-text-container">
                    <span class="payment-method-main-text">${payMethod.selectedCard.number}</span>
                    <span class="payment-method-main-text">${payMethod.selectedCard.date}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="payment-method-footer">
        <span class="payment-method-footer-text">Спишем оплату с карты при получении</span>
    </div>
    `
}

