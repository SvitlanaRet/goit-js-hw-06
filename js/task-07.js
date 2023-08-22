const inputElement = document.querySelector("#font-size-control")
const textElement = document.querySelector("#text")

const inputChange = (event) => {
    const valueElement = event.target.value
    textElement.style.fontSize = `${valueElement}px`
    // console.log(event.target.value);
}

inputElement.addEventListener("input", inputChange)