import {total} from '../state/total.js'
import {totalTemplate} from "./template/totalTemplate.js";
import {returnDeliveryTooltip} from "../tooltips/returnDeliveryTooltip.js";



document.addEventListener('DOMContentLoaded', function () {
    const totalContainer = document.querySelector('.total-container');
    const totalContent = document.createElement('div');
    totalContent.classList.add('total-content');
    totalContent.innerHTML = totalTemplate(total)

    totalContainer.appendChild(totalContent);

    //tooltip
    returnDeliveryTooltip()
});
