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
resultSpan.id = 'resultSpan'

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

const table = document.getElementById('tableContainer')
const n = 10

for(let i=0; i<n; i++) {
    let disabledString = '';
    if (i === 0) {
        disabledString = 'disabled'
        
    }

    table.insertAdjacentHTML('beforeend', 
    `<div class="cell">
        <span class="row-text">Row ${i+ 1}</span>
        <button class="remove">Delete row</button>
        <button class="up row-${i+ 1}" ${disabledString}>Up</button>
    </div>`
    )
}

const firstButton = document.getElementsByClassName('row-1')[0]
firstButton.style.cursor = 'default'

// table.addEventListener('click', function(event) {
//     if(event.target.classList.contains('remove')){
//            </div>event.target.parentNode.remove()
//     }
// })


const removeButtons = document.querySelectorAll('.remove')

removeButtons.forEach(removeButton => {

    removeButton.addEventListener('click', function() {
        this.parentNode.remove()

        const allUpButtons = document.querySelectorAll('.up')
        allUpButtons.forEach(button => {
            button.disabled = false
            button.style.cursor = 'pointer'
        })
        const topRow = table.firstElementChild
        const topUpButton = topRow.querySelector('.up')
        topUpButton.disabled = true;
        topUpButton.style.cursor = 'default'
    })
})



const upButtons = document.querySelectorAll('.up')

upButtons.forEach(upButton => {
    
    upButton.addEventListener('click', function() {
        const entireRow = this.parentNode
        table.prepend(entireRow)

        const allUpButtons = document.querySelectorAll('.up')
        allUpButtons.forEach(button => {
            button.disabled = false
            button.style.cursor = 'pointer'
        })
        const topRow = table.firstElementChild
        const topUpButton = topRow.querySelector('.up')
        topUpButton.disabled = true;
        topUpButton.style.cursor = 'default'
    })
    
})





const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = '#fae79a';
    })
    cell.addEventListener('mouseout', function() {
        cell.style.backgroundColor = '';
    })
})


// Store

const items = [
    {
    title: 'Hoco BS60 Exploring sports BT speaker, black',
    price: 199,
    imgSource: './assets/BS60.png'
    },
    {
    title: 'Borofone BR28 Joyful sports BT speaker, gray',
    price: 259,
    imgSource: './assets/BR28.png'
    },
    {
    title: 'Hoco X82 iP silicone charging data cable, white',
    price: 149,
    imgSource: './assets/X82.png'
    },
    {
    title: 'Borofone BQ20 Wings multifunctional wireless fast charger, black',
    price: 299,
    imgSource: './assets/BQ20.png'
    },
    {
    title: 'Hoco EW51 True wireless ANC noise reduction BT headset, white',
    price: 789,
    imgSource: './assets/EW51.png'
    },
    {
    title: 'Borofone BH40 Kyle air outlet magnetic car holder, black',
    price: 199,
    imgSource: './assets/BH40.png' 
    },  
]



function renderItems () {
    const container = document.getElementById('storeContainer');

    items.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', `
        <div class="item-container">
            <img class="store-image" src="${item.imgSource}" />
            <h4 class='item-title'>${item.title}</h4>
                 <div class="priceWishListButton">
                     <span class='item-price'>${item.price} lei</span>
                     <button class='add-to-wishlist' data-button-id="${index}">Add to wishlist</button>
                 </div>
        </div>
        `)
    })
}

renderItems()

const wishlistContainer = document.getElementById('wishlistContainer')
let totalButtonClicks = 0;

function addToWishlist () {
    totalButtonClicks ++;
    wishlistContainer.style.padding = 0

    const emptyText = document.getElementById('emptyList');
    emptyText.style.display = 'none'
    const title = this.parentNode.parentNode.getElementsByClassName('item-title')[0];
    const addedTitle = title.innerText;
    const price = this.parentNode.getElementsByClassName('item-price')[0];
    const addedPrice = price.innerText;
    const image = this.parentNode.parentNode.getElementsByClassName('store-image')[0];
    const addedImage = image.src;
    const button = this;

    wishlistContainer.insertAdjacentHTML('afterBegin', `
    <div class="wish-item" data-button-id="${button.dataset.buttonId}">
      <img class="added-store-image" src="${addedImage}" />
      <h4 style="width: 30%">${addedTitle}</h4>
      <span>${addedPrice}</span>
      <button class="wishlist-delete">Delete</button>
    </div>
    `);
    if(totalButtonClicks >= 1) {
        button.disabled = true
        button.textContent = 'Added to wishlist'
    }
 
    const deleteButtons = document.getElementsByClassName('wishlist-delete')
    Array.from(deleteButtons).forEach(deleteButton => {
             deleteButton.addEventListener('click', function () {
                const wishItem = this.parentNode;
                const buttonId = wishItem.dataset.buttonId;
                const originalButton = document.querySelector(`button[data-button-id="${buttonId}"]`);

                originalButton.disabled = false;
                originalButton.textContent = 'Add to wishlist';

                wishItem.remove()

                  if(deleteButtons.length === 0){
                containerIsEmpty = true;
                emptyText.style.display = 'block'
                wishlistContainer.style.padding = "2rem"
             }
        
    })
})
}

const addToWishlistButtons = document.getElementsByClassName('add-to-wishlist')

Array.from(addToWishlistButtons).forEach(button => {
    button.addEventListener('click', addToWishlist)
})


