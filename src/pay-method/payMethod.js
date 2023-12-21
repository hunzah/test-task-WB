import {payMethodTemplate} from "./template/payMethodTemplate.js";
import {total} from "../state/total/total.js";


document.addEventListener('DOMContentLoaded', function () {
    const paymentContainer = document.getElementById('payment-method-main');
    paymentContainer.innerHTML = payMethodTemplate(total)
});
