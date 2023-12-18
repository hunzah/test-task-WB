import {state} from '../state/index.js'

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('cards-list');
    if (productList) {
        state.products.forEach(product => {
            const listItem = document.createElement('li');
            const bigNumber = Number(product.priceWithDiscount.replace(/\s/g, ''));

            listItem.classList.add('card');

            listItem.innerHTML = `
                <div class="product-info-container">
                    <div class="photo-and-checkbox">
                        <div class="checkbox-container">
                            <input type="checkbox" class="checkbox" id="card-checkbox-${product.id}">
                            <label for="card-checkbox-${product.id}" class="custom-checkbox"></label>
                        </div>
                        <span class=${product.size ? 'product-size-mobile-text' : ''}>${product.size || ''}</span>
                        <img class="product-photo" src="${product.img}" alt="product-photo"/>
                    </div>
                    <div class="product-text-info">
                        <div>
                        <div class="total-price-mobile-container">
                            <div class="price">
                                <span class="total-price-big-number">${product.priceWithDiscount}</span>
                                <span class="total-price-currency">${product.currency}</span>
                            </div>
                            <span class="total-price-discount-number">${product.price} ${product.currency}</span>
                        </div>
                           <span class='product-name-text-mobile'>${product.name}</span>
                           <span class='product-name-text'>${product.name}</span>
                        </div>
                        <div class="color-size-container">
                            <span class="product-color-text">${product.color ? `Цвет: ${product.color}` : ''}</span>
                            <span class="product-size-text">${product.size ? `Размер: ${product.size}` : ''}</span>
                        </div>
                        <div class="address-container">
                            <span class="pick-up-address-name-text">${product.address}</span>
                            <span class="pick-up-address-name-text-wb">${product.companyName}</span>
                        </div>
                    </div>
                </div>
                <div class="count-and-price-container">
                <div class="quantity-goods-container">
                    <div class="counter">
                        <button ${product.count < 2 ? 'disabled' : ''} class="count-button">−</button>
                        <input id="goods-count-1" class="input-count-screen"/>
                        <label for="goods-count-1" class="custom-input-count-screen">${product.count}</label>
                        <button ${product.left === product.count ? 'disabled' : ''} class="count-button">+</button>
                    </div>
                        <span class="products-left-text">${product.left < 10 ? `Осталось ${product.left} шт.` : ''}</span>
                    <div class="buttons-container">
                    <button class="count-button">
                        <img src="/assets/icons/card/like-icon.svg" alt="like-icon"/>
                    </button>
                        <button class="count-button" id="${product.id}-count-button">
                            <img src="/assets/icons/card/trash-icon.svg" alt="basket-icon"/>
                        </button>
                    </div>
                </div>
                <div class="total-price-container">
                    <div class="price">
                        <span class=${bigNumber < 10000 ? "total-price-number" : 'total-price-big-number'}>
                            ${product.priceWithDiscount}</span>
                        <span class="total-price-currency">${product.currency}</span>
                    </div>
                    <span class="total-price-discount-number">${product.price} ${product.currency}</span>
                </div>
            </div>
            `;

            productList.appendChild(listItem);
            const trashButton = document.getElementById(`${product.id}-count-button`);
            trashButton.addEventListener('click', () => {
                const indexToRemove = state.products.findIndex(p => p.id === product.id);
                if (indexToRemove !== -1) {
                    state.products.splice(indexToRemove, 1);
                }
                listItem.remove();
            });
        });
    }
});




