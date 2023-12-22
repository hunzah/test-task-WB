import {cards} from "../../state/cards/cards.js";
import img from './../../../assets/icons/header/burger-icon.svg'

export function headerTemplate() {
    const cardsValue = cards.products.length
    return `
<span class="header-basket-goods-count-text">${cardsValue}</span>
<img src={img} alt="profile-icon"/>
<span class="header-basket-text">Корзина</span>
   `
}

