import {total} from '../state/total.js'



document.addEventListener('DOMContentLoaded', function () {
    const totalContainer = document.querySelector('.total-container');
    const totalContent = document.createElement('div');
    console.log(total.priceWithoutDiscount)
    totalContent.classList.add('total-content');
    totalContent.innerHTML = `
                <div class="total-info-container">
                    <div class="total-info-price-container">
                        <div class="total-info-price-header">
                            <span class="total-info-title-text">Итого</span>
                            <span class="total-info-price-text">${total.totalAmount} сом</span>
                        </div>

                        <div class="total-price-with-delivery-info-container">
                            <div class="total-goods-quantity-text-container">
                                <span class="total-info-text" id="prod-amount">${total.totalProducts} товара</span>
                                <span class="total-info-text" id="prod-price-amount">${total.priceWithoutDiscount}</span>
                            </div>
                            <div class="total-discount-text-container">
                                <span class="total-info-text">Скидка</span>
                                <span class="total-info-text" id="prod-discount-amount">-${total.discount}</span>
                            </div>
                            <div class="total-delivery-text-container">
                                <span class="total-info-text">Доставка</span>
                                <span class="total-info-text">Бесплатно</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="total-delivery-content">
                    <div class="total-delivery-point-container">
                        <div class="total-delivery-point-receiver-container">
                            <span class="total-delivery-point-title-text">Доставка в пункт выдачи</span>
                            <button>
                                <img src="assets/icons/change-icon.svg" alt="edit-icon">
                            </button>
                        </div>
                        <div class="total-delivery-point-address-text-container">
                            <span class="total-delivery-point-address-text">Бишкек, улица Ахматбека Суюмбаева, 12/1</span>
                        </div>
                        <div class="total-delivery-date-text-container">
                            <span class="total-delivery-date-text">5–8 фев</span>
                        </div>
                    </div>
                    <div class="total-return-delivery-container">
                        <img src="assets/icons/price-shipping-green.svg" alt="price-shipping-icon">
                        <span class="return-delivery-text">Обратная доставка товаров на склад при отказе —
                                <span class="return-delivery-text-green">бесплатно</span>
                            </span>
                    </div>
                </div>
                <div class="total-pay-card-content">
                    <div class="total-pay-card-header">
                        <div class="total-pay-card-header-container">
                            <span class="total-pay-title-text">Оплата картой</span>
                            <button>
                                <img src="assets/icons/change-icon.svg" alt="change-icon">
                            </button>
                        </div>
                        <div class="total-pay-card-info-container">
                            <img src="assets/icons/mir-card.svg" alt="mir-card">
                            <span class="total-pay-card-numbers">1234 12•• •••• 1234</span>
                        </div>
                    </div>
                    <div class="total-pay-card-immediately-payment-container">
                        <div class="pick-all-checkbox-container">
                            <input type="checkbox" class="checkbox" id="total-checkbox">
                            <label for="total-checkbox" class="custom-checkbox-label"></label>
                        </div>
                        <span class="immediately-payment-text">Спишем оплату с карты при получении</span>
                    </div>
                </div>
                <div class="total-order-button-container">
                    <button class="order-submit-button">Заказать</button>
                    <div class="total-order-checkbox-container">
                        <img src="assets/icons/terms-checked.svg" alt="checked-icon"/>
                        <span class="terms-text">Соглашаюсь с правилами пользования торговой площадкой и возврата</span>
                    </div>
                </div>
            </div>
    `;

    totalContainer.appendChild(totalContent);
});
