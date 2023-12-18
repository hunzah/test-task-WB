const chooseAllCheckbox = document.getElementById('choose-all-checkbox');


if (chooseAllCheckbox) {
    chooseAllCheckbox.addEventListener('change', function(event) {
        console.log('Выбран чекбокс "Выбрать все":', event.target.checked);
    });
}

