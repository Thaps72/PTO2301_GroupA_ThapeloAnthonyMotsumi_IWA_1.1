const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler =() =>{
    number.value = number.value - 2;

}


const addHandler =() =>{
    number.value = number.value + 40;
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)