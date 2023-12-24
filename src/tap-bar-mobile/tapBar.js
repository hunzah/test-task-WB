import {tapBarTemplate} from "./template/tapBarTemplate.js";



document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.navbar-mobile-basket-icon-container');
    container.innerHTML = tapBarTemplate()
});
