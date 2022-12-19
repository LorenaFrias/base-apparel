const form = document.querySelector('#form')
const email = document.getElementById('email');
const error = document.querySelector('.error');
const msjError = document.querySelector('.error-text');


form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (email.value.trim() === "" || !emailIsValid(email.value.trim())) {

        msjError.textContent = 'Please provide a valid email';
        msjError.style.color = 'red';
        error.style.display = 'block'

        email.style.outline = '1px solid red';
        email.focus();
        return false;
    
    } else {
        email.style.outline = "1px solid green";
        error.style.display = "none";
        msjError.textContent = '';

    }


    
})

const emailIsValid = email => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}