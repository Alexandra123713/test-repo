// My version

// const string = prompt('Enter a text')

// console.log(string)

// const numberOfWords = string.split(' ')

// console.log(numberOfWords)

// const wordLengths = [];
// let totalLength = 0;
    
//     for(i=0; i<numberOfWords.length; i++){

//        const wordLength = numberOfWords[i].length
//        wordLengths.push(wordLength)
//        totalLength += wordLength

//     }

//     console.log(wordLengths)

//     const averageLength = totalLength / numberOfWords.length

//     console.log('The length of the string is ' + numberOfWords.length)

//     console.log('The average length of word is ' + averageLength)


// Another version

// const string = prompt('Enter a text')

// let count = 0;

// for(let i=0; i<string.length; i++){
//     if(string[i] === ' '){
//         count ++
//     }
// }

// count ++;

// console.log(count)

// const averageLength = (string.length-(count - 1)) / count;

// console.log('The length of the string is ' + count)

// console.log('The average length of word is ' + averageLength)



// const getArithmethicMean = (a, b, c, d) => (a + b + c + d) / 4

// console.log(getArithmethicMean(7,6,89,21))


// const isEven = (number) => number % 2 === 0

// console.log(isEven(25))




// const isTriangleExist = (a, b, c) => (a <= (b+c) && b <= (a+c) && c <= (a+b))

// console.log(isTriangleExist(3,17,2))



// const person = {
//     name: 'Sanda',
//     age: 24,
//     message() {console.log( `Hello, my name is ${this.name}, I'm ${this.age} years old`)}
// }

// person.message()



// const getEvenNumbers = function(){
//     const evenNumbers = []
//     for(let i=0; i<arguments.length; i++){
//         if(arguments[i] % 2 === 0){
//         evenNumbers.push(arguments[i])
//         }
//     }
//     console.log(evenNumbers)
// }

// getEvenNumbers(8,3,5,25,15,4,90,23,57,6,4)




// const getSumOfNumbers = function(){
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         if(typeof arguments[i] === 'number'){
//             sum += arguments[i]
//         }
//     }
// console.log(sum)
// }

// getSumOfNumbers(7, true, 20, 'hello', 'one', 14, false)




// const N = 100;

// const points = [];

// const getRandomNum = () => Math.round(Math.random() * 20 - 10)

// for (let i=0; i<N; i++){
//     points.push({
//         x: getRandomNum(),
//         y: getRandomNum()
//     })
// }

// console.log(points)