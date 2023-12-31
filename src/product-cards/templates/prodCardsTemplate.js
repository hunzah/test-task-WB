export function productCardTemplate(product) {
    const bigNumber = Number(product.priceWithDiscount.replace(/\s/g, ''));
    return `
               <div class="product-info-container">
                    <div class="photo-and-checkbox">
                        <div class="checkbox-container">
                            <input checked type="checkbox" class="checkbox cardCheckbox" id="card-checkbox-${product.id}">
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
                            <div class="address-name-info-container">
                                <span class="pick-up-address-name-text-wb">${product.companyName}</span>
                                <img class="info-icon" id="info-${product.id}" src="./assets/icons/card/icon-info.svg" alt="info-icon"/>
                            </div>
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
                        <button class="like-button" id="${product.id}-like-button">
                           <svg  class="like-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="black">
                                <path  d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"/>
                            </svg>
                        </button>
                        <button class="trash-button" id="${product.id}-count-button">
                            <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                                    fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                                    fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                                    fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="total-price-container">
                    <div class="price">
                        <span class=${bigNumber < 10000 ? "total-price-number" : 'total-price-big-number'}>
                            ${product.priceWithDiscount}</span>
                        <span class="total-price-currency">${product.currency}</span>
                    </div>
                    <span id="discount-text-${product.id}" class="total-price-discount-number">${product.price} ${product.currency}</span>
                </div>

            </div>
    `;
}