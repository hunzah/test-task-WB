import {totalTemplate} from "./template/totalTemplate.js";
import {returnDeliveryTooltip} from "../tooltips/returnDeliveryTooltip.js";



document.addEventListener('DOMContentLoaded', function () {
    const totalContainer = document.querySelector('.total-container');
    totalContainer.innerHTML = totalTemplate();

    //tooltip
    returnDeliveryTooltip()
});
