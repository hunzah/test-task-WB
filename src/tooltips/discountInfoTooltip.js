export function discountInfoTooltip(product) {
    const discountInfoText = document.getElementById(`discount-text-${product.id}`);
    const tooltipDiscountContainer = document.createElement('div');
    tooltipDiscountContainer.classList.add('tooltip-discount-container');

    const firstInfoContainer = document.createElement('div');
    firstInfoContainer.classList.add('tooltip-discount-info-container');
    firstInfoContainer.innerHTML = `
    <span class="tooltip-discount-text">sadad</span>
    <span class="tooltip-discount-text">sadadadadadaddsdfsfs</span>
`;

    const secondInfoContainer = document.createElement('div');
    secondInfoContainer.classList.add('tooltip-discount-info-container');
    secondInfoContainer.innerHTML = `
    <span class="tooltip-discount-sec-text">sadadadadadad</span>
    <span class="tooltip-discount-sec-text">sadad</span>
`;

    tooltipDiscountContainer.appendChild(firstInfoContainer);
    tooltipDiscountContainer.appendChild(secondInfoContainer);

    discountInfoText.addEventListener('mouseenter', () => {
        discountInfoText.appendChild(tooltipDiscountContainer);
    });

    discountInfoText.addEventListener('mouseleave', () => {
        tooltipDiscountContainer.remove();
    });

}

