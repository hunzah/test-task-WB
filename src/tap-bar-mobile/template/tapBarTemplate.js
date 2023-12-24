import {cards} from "../../state/cards/cards.js";

export function tapBarTemplate() {
    const cardsValue = cards.products.length
    return `
        <span class="navbar-basket-goods-count-text-mobile">${cardsValue}</span>
        <img src="./assets/icons/mobile/red-basket-mobile.svg" alt="basket-icon"/>
   `
}

