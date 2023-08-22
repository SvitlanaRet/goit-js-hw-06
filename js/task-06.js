const inputElement = document.querySelector('#validation-input')
const inputLength = inputElement.getAttribute('data-length')

const inputHandler = (event) => {
    const currentValue = event.currentTarget.value
    
    if(Number(inputLength) === Number(currentValue.length)) {
        inputElement.classList.toggle('invalid')
        inputElement.classList.add('valid')
    } else {
        inputElement.classList.toggle('valid')
        inputElement.classList.add('invalid')
    }
}

inputElement.addEventListener('blur', inputHandler)