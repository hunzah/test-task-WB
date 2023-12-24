const validateInput = (input, error, validationRegex, errorMessage) => {


    let isNameValid = true;
    let isBlur = false;


    input.addEventListener('input', function () {
        const inputValue = input.value;

        if (!validationRegex.test(inputValue)) {
            isNameValid = false;

        } else {
            isNameValid = true;
            error.textContent = '';
        }
    });

    input.addEventListener('blur', function () {
        isBlur = true
        if (!input.value.trim()) {
            return;
        }

        if (!isNameValid) {
            error.textContent = errorMessage;
        }
    });

    input.addEventListener('focus', function () {
        if (!isNameValid && !isBlur) {
            error.textContent = '';
        }
    });
}
const nameInput = document.querySelector('.receiver-name-input');
const nameError = document.querySelector('.receiver-input-error');
validateInput(nameInput, nameError, /^[a-zA-Zа-яА-Я]+$/, 'Имя может содержать только буквы');

const lastNameInput = document.querySelector('.receiver-lastname-input');
const lastNameError = document.querySelector('.receiver-lastname-input-error');
validateInput(lastNameInput, lastNameError, /^[a-zA-Zа-яА-Я]+$/, 'Фамилия может содержать только буквы');

const phoneInput = document.querySelector('.receiver-phone-input');
const phoneError = document.querySelector('.receiver-phone-input-error');
validateInput(phoneInput, phoneError, /^\+?[0-9]+$/, 'Введите корректный номер');

const mailInput = document.querySelector('.receiver-email-input');
const mailError = document.querySelector('.receiver-email-input-error');
validateInput(mailInput, mailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Введите корректный email');

const innInput = document.querySelector('.receiver-INN-input');
const innError = document.querySelector('.receiver-INN-error');
validateInput(innInput, innError, /^\d+$/, 'Введите корректный ИНН');
