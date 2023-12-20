import {payMethodTemplate} from "./template/payMethodTemplate.js";


document.addEventListener('DOMContentLoaded', function () {
    const paymentContainer = document.getElementById('payment-container');
    paymentContainer.innerHTML = payMethodTemplate()
});
