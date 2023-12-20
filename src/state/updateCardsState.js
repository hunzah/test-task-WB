import {cards} from "./cards.js";

export function updateCardState(updatedState) {
    cards.products = updatedState.products;
    cards.notAvailableProducts = updatedState.notAvailableProducts;
}
