import { changePickUpPointModalTemplate } from "./changePickUpPointTemplate.js";

document.addEventListener('DOMContentLoaded', function () {
    const modalTemplate = changePickUpPointModalTemplate();

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalTemplate;
    modalContainer.style.display = 'none';

    document.body.appendChild(overlay);
    document.body.appendChild(modalContainer);

    const openModalButton = document.getElementById('change-pick-point-method-button');
    const closeModalButton = document.getElementById('close-change-pick-up-point-modal-button');
    const setPickUpPointButton = document.getElementById('set-pick-up-point-button');

    function openModal() {
        overlay.style.display = 'block';
        modalContainer.style.display = 'block';
        document.body.classList.add('overlay-open');
    }

    function closeModal() {
        overlay.style.display = 'none';
        modalContainer.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }

    function logSelectedPoint() {
        // Получение выбранного пункта (предполагаем, что у вас есть соответствующий код для этого)
        // const selectedPoint = ...;
        // Вывод в консоль
        console.log(selectedPoint);
        // Закрытие модального окна
        closeModal();
    }

    openModalButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    setPickUpPointButton.addEventListener('click', logSelectedPoint);
});
