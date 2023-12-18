import {state} from '../state/index.js'

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('not-available-prod-cards-list');
    if (productList) {
        state.notAvailableProducts.forEach(product => {
            const listItem = document.createElement('li');

            listItem.classList.add('card');

            listItem.innerHTML = `
                <div class="not-available-product-info-container">
                    <div class="photo-and-checkbox">
                        <span class=${product.size ? 'product-size-mobile-text' : ''}>${product.size || ''}</span>
                        <img class="product-photo" src=${product.img} alt="product-photo"/>
                    </div>
                    <div class="product-text-info">
                        <span class="product-name-text">${product.name}</span>
                        <span class="product-name-text-mobile">${product.name}</span>
                        <div class="color-size-container">
                            <span class="product-color-text">${product.color ? `Цвет: ${product.color}` : ''}</span>
                            <span class="product-size-text">${product.size ? `Размер: ${product.size}` : ''}</span>
                        </div>
                    </div>
                </div>

                <div class="count-and-price-container">
                    <div class="quantity-goods-container">
                        <div class="buttons-container">
                            <button class="count-button">
                                <img class="like-icon" src="/assets/icons/card/like-icon.svg" alt="like-icon">
                            </button>
                            <button class="count-button" id="${product.id}-count-button">
                                <img src="/assets/icons/card/trash-icon.svg" alt="basket-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            `;

            productList.appendChild(listItem);
            const trashButton = document.getElementById(`${product.id}-count-button`);
            trashButton.addEventListener('click', () => {
                const indexToRemove = state.notAvailableProducts.findIndex(p => p.id === product.id);
                if (indexToRemove !== -1) {
                    state.notAvailableProducts.splice(indexToRemove, 1);
                }
                listItem.remove();
            });
        });
    }
});
