import {cards} from '../state/cards/cards.js'
import {removeNotAvailableProduct} from "./logic/notAviableProductLogic.js";
import {notAvailableCardTemplate} from "./templates/notAviableCardsTemplate.js";

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('not-available-prod-cards-list');
    const header = document.querySelector('.out-of-stock-accordion-header');

    if (productList) {
        cards.notAvailableProducts.forEach(product => {
            const listItem = document.createElement('li');

            listItem.classList.add('card');

            listItem.innerHTML = notAvailableCardTemplate(product)

            productList.appendChild(listItem);

            //delete cards logic
            const trashButton = document.getElementById(`${product.id}-count-button`);
            trashButton.addEventListener('click', () => {
                removeNotAvailableProduct(product, listItem, header, cards);
            });

            //add in favorite logic
            const likeButton = document.getElementById(`${product.id}-like-button`);
            likeButton.addEventListener('click', () => {
                product.isFavorite ? product.isFavorite = false : product.isFavorite = true
                if (product.isFavorite) {
                    likeButton.classList.add('like-button-favorite')
                } else {
                    likeButton.classList.remove('like-button-favorite')
                }
            });
        });
    }
});
