//Form

const button = document.getElementById('button')
const textInput = document.getElementById('textInput')


const buttonClickHandler = function() {
    const inputValue = textInput.value
    alert(inputValue)
    textInput.value = ''
}

button.addEventListener('click', buttonClickHandler)
textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buttonClickHandler();
    }
});


//Another form

const anotherButton = document.getElementById('anotherButton')
const formContainer = document.getElementById('formContainer')
let totalClicks = 0;

const anotherButtonClickHandler = function() {
    const input = document.createElement('input')
    input.id = 'newTextInput'
    input.placeholder = 'Enter a text'
    input.type = 'text'
    formContainer.appendChild(input)

    const newButton = document.createElement('button')
    newButton.id = 'newButton'
    newButton.type = 'button'
    newButton.textContent = 'Click!'
    formContainer.appendChild(newButton)

    const newButtonClickHandler = function() {
        const inputValue = input.value
        alert(inputValue)
        input.value = ''
    }

    newButton.addEventListener('click', newButtonClickHandler)

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            newButtonClickHandler()
        }
    })
    totalClicks += 1;
    if(totalClicks >= 1) {
        anotherButton.disabled = true;
        return
    }
}

anotherButton.addEventListener('click', anotherButtonClickHandler)


//Calculator

const numberA = document.getElementById('number-a')
const numberB = document.getElementById('number-b')
const operation = document.querySelector('select')

const result = document.getElementById('result')
const resultSpan = document.getElementById('result-span')

const resultButtonHandler = function () {
  const selectedOperation = operation.value;  

  const valueA = numberA.value.replace(',', '.');
  const valueB = numberB.value.replace(',', '.');

  let resultNumber = 0;
  if(selectedOperation === '+') {
    resultNumber =  Number(valueA) + Number(valueB)
    resultSpan.textContent = resultNumber
  }
  else if(selectedOperation === '-') {
    resultNumber =  Number(valueA) - Number(valueB)
    resultSpan.textContent = resultNumber
  }
  else if(selectedOperation === '*') {
    resultNumber =  Number(valueA) * Number(valueB)
    resultSpan.textContent = resultNumber
  }
  else if(selectedOperation === '/') {
    if(Number(valueB) !== 0){
        resultNumber =  Number(valueA) / Number(valueB)
        resultSpan.textContent = resultNumber
    } else {
        resultSpan.textContent = 'Division by zero is not allowed';
      }
  } 
}

result.addEventListener('click', resultButtonHandler)


//Table

const table = document.getElementById('table-container')
const n = 20

for(let i=0; i<n; i++) {
    table.insertAdjacentHTML('beforeend', 
    `<div class="cell" style="display: flex; flex-direction: row; justify-content: space-around; padding: 5px; border: 1px solid black">
        <span class="row-text">Row ${i+ 1}</span>
        <button class="remove">Delete row</button>
        <button class="up">Up</button>
    </div>`
    )
}

// table.addEventListener('click', function(event) {
//     if(event.target.classList.contains('remove')){
//         event.target.parentNode.remove()
//     }
// })


const removeButtons = document.querySelectorAll('.remove')

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', function() {
        this.parentNode.remove()
})})

const upButtons = document.querySelectorAll('.up')

upButtons.forEach(upButton => {
    
    upButton.addEventListener('click', function() {
        const entireRow = this.parentNode
        table.prepend(entireRow)
    })
})


const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.setAttribute('class', 'colored')
    })
    cell.addEventListener('mouseout', function() {
        cell.removeAttribute('class', 'colored')
    })
})