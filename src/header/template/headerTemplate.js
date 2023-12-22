import {cards} from "../../state/cards/cards.js";

export function headerTemplate() {
    const cardsValue = cards.products.length
    return `
<span class="header-basket-goods-count-text">${cardsValue}</span>
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zaiushka.com%2F%25D0%25B1%25D1%2583%25D0%25BA%25D0%25B2%25D0%25B0-%25D0%25B1%2F%25D0%25B1%25D0%25B5%25D0%25BB%25D0%25BA%25D0%25B0-%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25B8%25D0%25BD%25D0%25BA%25D0%25B0%2F&psig=AOvVaw34DJ94T__fR-Ldl_mmnFnT&ust=1703344230969000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDo6-Gpo4MDFQAAAAAdAAAAABAD" alt="basket-icon"/>
<span class="header-basket-text">Корзина</span>
   `
}

