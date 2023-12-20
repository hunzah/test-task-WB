import {cards} from "./cards.js";

export function updateState(updatedState) {
    cards.products = updatedState.products;
    cards.notAvailableProducts = updatedState.notAvailableProducts;
}
