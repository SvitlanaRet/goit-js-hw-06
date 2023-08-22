const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
const number = document.getElementById('value')

let counterValue = 0;

buttonIncrement.addEventListener('click', (event) => {
    counterValue += 1
    addCounter()
    
})

buttonDecrement.addEventListener('click', (event) => {
    counterValue -= 1
    addCounter()
})

let addCounter = () => {
    number.innerHTML = counterValue
}




