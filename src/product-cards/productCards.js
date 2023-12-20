import {cards} from '../state/cards.js'
import {total} from '../state/total.js'
import {calculatePrice, removeProduct, selectAll, updateSelectAllCheckboxState} from "./logic/productCardLogic.js";
import {productCardTemplate} from "./templates/prodCardsTemplate.js";
import {cardInfoTooltip} from "../tooltips/cardInfoTooltip.js";
import {discountInfoTooltip} from "../tooltips/discountInfoTooltip.js";


document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('cards-list');
    const header = document.querySelector('.accordion-header');
    const selectAllCheckbox = document.getElementById('choose-all-checkbox')

    if (productList) {
        cards.products.forEach(product => {


            const listItem = document.createElement('li');
            const bigNumber = Number(product.priceWithDiscount.replace(/\s/g, ''));

            listItem.classList.add('card');

            listItem.innerHTML = productCardTemplate(product);

            productList.appendChild(listItem);

            //delete cards logic
            const trashButton = document.getElementById(`${product.id}-count-button`);
            trashButton.addEventListener('click', () => {
                removeProduct(product, listItem, header, total);
            });

            //choose product logic
            const checkbox = document.getElementById(`card-checkbox-${product.id}`);
            checkbox.addEventListener('change', function () {
                calculatePrice(product, this.checked, total);
                updateSelectAllCheckboxState()
            })
            // main checkbox
            selectAllCheckbox.addEventListener('change', function () {
                const checkboxes = document.querySelectorAll('.cardCheckbox');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = selectAllCheckbox.checked;
                    selectAll(checkbox.checked, total);
                });
            });
            //tooltip
            cardInfoTooltip(product)
            discountInfoTooltip(product)
        });
    }
});


