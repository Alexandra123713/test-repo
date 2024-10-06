// Exercises limited to the console



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


// !!!!!!!HOMEWORK!!!!!!!


// console.log(101+443)
// console.log(773 % 34)
// console.log(Math.PI*(10**2))

// const number = prompt('Enter a number')
// console.log(Number(number)*2)

// const number1 = Number(prompt('Enter first number'))
// const number2 = Number(prompt('Enter second number'))
// console.log(`The difference between ${number1} and ${number2} is ${number1-number2}`)


// const number1 = Number(prompt('Enter first number'))
// const number2 = Number(prompt('Enter second number'))
// const number3 = Number(prompt('Enter the third number'))
// console.log(`The arithmetic mean of the numbers is ${(number1+number2+number3)/3}`)


// const number1 =  Number(prompt('Enter first number'))
// const number2 = Number(prompt('Enter second number'))
// const randomRangeNumber = Math.round(number1 + Math.random() * (number2 - number1)) 
// console.log(randomRangeNumber)

// const rabbits = Number(prompt('Enter total number of rabbits'))
// const boxes = Number(prompt('Enter a number of boxes'))
// const maxNumberInOneBox = Number(prompt('Enter max number of rabbits in one box'))

// const res = rabbits - boxes * maxNumberInOneBox
// console.log(res)



// const seconds = Number(prompt('Enter the number of seconds'))
// const days = Math.floor(seconds / 60 / 60 /24)
// console.log(days)



// const width = + prompt('Enter room width')
// const length = + prompt('Enter room length')
// const height = + prompt('Enter room height')

// const area = ((width*height)*2) + ((length*height)*2)
// console.log(area)



// const symbolNumber = + prompt('Enter the number of symbol');
// const symbolsPerPage = 30 * 70;
// const pageNumber = Math.ceil(symbolNumber / symbolsPerPage)
// console.log(pageNumber)



// const salary = +prompt('Enter your salary')
// const tax = +prompt('Enter the tax')
// const finalSalary = salary - ((salary*tax)/100)
// console.log(`Your final salary is ${finalSalary} lei`)



// const number1 = + prompt('Enter first number')
// const number2 = + prompt('Enter second number')

// if(number1 % number2 === 0){
//     console.log('The first number is divided by second number')
// }
// else{
//     console.log('The first number is not divided by second number')
// }


// const number1 = + prompt('Enter first number')
// const number2 = + prompt('Enter second number')
// const number3 = + prompt('Enter third number')

// if(number1 > number2 && number1 > number3){
// console.log(number1)
// }
// else if(number2 > number1 && number2 > number3){
//     console.log(number2)
// }
// else console.log(number3)



// const numberOfClients = +prompt('Enter the number of clients in the line')
// const time = numberOfClients*10
// const freeTime = (17-9) * 60

// if(freeTime > time){
//     console.log('The customer will be successfully served')
// }
// else console.log('The customer will not be served')




// const x = + prompt('Enter the x coordinate')
// const y = + prompt('Enter the y coordinate')
// if(x<=8 && y<=8 && x>0 && y>0){
//     if((x+y) % 2 === 0){
//         console.log('The square is black')
//     }
//     else  console.log('The square is white')
// }
// else console.log('Invalid coordinate')



// const distance = + prompt('Enter the distance between cities')
// const speed = + prompt('Enter the speed of your car')
// const numberOfDays = + prompt('Enter the number of days in which you want to cover the distance')

// const necessaryDays = distance / speed / 24

// if (numberOfDays >= necessaryDays){
//     console.log('Yes')
// }
// else console.log('No')



// const minutes = + prompt('Enter the minutes')

// if(minutes <= 100){
//     let totalCost = minutes * 50 / 100
//     console.log(`The total amount to be paid is ${totalCost} lei`) 
// }
// else {
//     totalCost =  ((100*50) + ((minutes-100) * 70)) / 100
//     console.log(`The total amount to be paid is ${totalCost} lei`)
// } 



// const day = + prompt('Enter the day of your birth')
// const month = + prompt('Enter the month of your birth')
// const date = new Date()

// if(month < date.getMonth() + 1){
//     console.log('The birthday has already passed')
// }
// if(month > date.getMonth() + 1){
//     console.log('The birthday is coming up')
// }
// if(month === date.getMonth() + 1){
//     if(day < date.getDate()){
//         console.log('The birthday has already passed')
//     }
//     else if(day > date.getDate()){
//         console.log('The birthday is coming up')
//     }
//     else console.log('Congratulation, is your bithday!!!')
    
// }




// const a = + prompt('Enter a number')
// const b = + prompt('Enter a number')
// const c = + prompt('Enter a number')
// const d = + prompt('Enter a number')

// const max = Math.max(a, b, c, d)
// console.log(`The max number is ${max}`)




// const number1 = + prompt('Enter a number')
// const number2 = + prompt ('Enter a number')

// if(number1 % number2 === 0){
//     console.log(`${number1} + ${number2} = ${number1 + number2}`)
// }
// else console.log(`${number1} * ${number2} = ${number1 * number2}`)



// const s = prompt('Enter symbol')

// switch(s.toLowerCase()){
//     case 'a':
//     case'e':
//     case 'i':
//     case 'u':
//     case 'o':
//        console.log('Vocale')
//        break;
//     case '0':
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//     case '9':
//         console.log('Numar')
//         break;
//     default:
//         console.log('Nedefinit')
// }




// const s = prompt('Enter symbol')

// if('aeiou'.includes(s)){
//     console.log('Vocala')
// } else{
//     if('0123456789'.includes(s)){
//         console.log('Numar')
//     } else console.log('Nedefinit')
// } 



// const randomNum = Math.round(Math.random() * 10)
// let attempts = 0;
// let userRandomNum

// do{
//   userRandomNum = + prompt('Enter a number from 1 to 10')
//   attempts += 1;
// } while (randomNum !== userRandomNum) 
//     console.log('You guessed number within ' + attempts + ' attempts')


// const num = + prompt('Enter a number')
// let sum = 0;
// for(let i=0; i<=num; i++){
//     sum += i
// }
// console.log(sum)



// const num = +prompt('Enter a number')
// const halfNum = num/2
// let count = 0;
// for (let i=2; i<=halfNum; i++){
//     if(num%i === 0){
//         count += 1;
//     }
// }
// console.log(count)


// const number = prompt('Enter a number')
// let sum = 0

// for(let i=0; i<number.length; i++){
//     sum += Number(number[i])
// }

// number % sum === 0 
// ? console.log(true)
// : console.log(false)


// const height = + prompt('Enter a number')

// for(let i=0; i<height; i++){
//    const str = " ".repeat(height - i -1) + "*".repeat(2 * i + 1)
//    console.log(str)
// }


// const n = + prompt('Enter array length')

// let randomNumbers = []
// let filteredNumbers = []
// for(let i=0; i<=n; i++){
//    randomNumbers.push(Math.round(Math.random()*100))
//    if(randomNumbers[i] % 3 ===0){filteredNumbers.push(randomNumbers[i])}
// }

// console.log(randomNumbers)
// console.log(filteredNumbers)



// const n = + prompt('Enter array length')
// let randomNumbers = []

// for(let i=0; i<n; i++){
//    randomNumbers.push(Math.round(Math.random()*100))
// }
// console.log(randomNumbers)

// const max = Math.max(...randomNumbers)
// const min = Math.min(...randomNumbers)
// const sum = max+min
// console.log(sum)



// const n = + prompt('Enter array length')
// let randomNumbers = []
// let max = 0
// let min = 100

// for(let i=0; i<n; i++){
//    let generatedNumber = Math.round(Math.random()*100)
//    randomNumbers.push(generatedNumber)

//    if(generatedNumber > max){
//       max = generatedNumber
//    }
//    if(generatedNumber < min) {
//       min = generatedNumber
//    }
// }

// console.log(randomNumbers)
// console.log(max, min)



// const n = + prompt('Enter array length')
// let randomNumbers = []
// let positiveNumbers = []
// let negativeNumbers = []

// for(let i=0; i<n; i++){
//    randomNumbers.push(Math.round(Math.random()*200 - 100))
//    if(randomNumbers[i] > 0){
//       positiveNumbers.push(randomNumbers[i])
//    }
//    else negativeNumbers.push(randomNumbers[i])
// }
// console.log(randomNumbers)
// console.log(positiveNumbers)
// console.log(negativeNumbers)


// const str = prompt('Enter a string')
// let splitString 
// splitString = str.split(' ') 
// for(let i=0; i<splitString.length; i++){
//    if(splitString[i].length >= 3){
//       console.log(splitString[i])
//    }
// }


// const n = + prompt('Enter array length')
// let randomNumbers = []

// for(let i=0; i<n; i++){
//       randomNumbers.push(Math.round(Math.random()*1000))
//    }
//    console.log(randomNumbers)

// randomNumbers.sort((a,b) => a-b);

// console.log(randomNumbers)


// let string11 = prompt('Enter a text')
// let splitString = string11.split('')

// const latinLetters = 'qwertyuiopasdfghjklzxcvbnm'
// let countLetters = 0
// function compareLetters (symbol) {
//    if(latinLetters.includes(String(symbol).toLocaleLowerCase)) {
//       countLetters ++;
//    }
// }

// splitString.forEach(compareLetters)
// console.log(splitString, countLetters)


// const str = prompt('Enter translited string')
// const eng = "qwertyuiop[]asdfghjkl;'zxcvbnm,."
// const rus = 'йцукенгшщзхъфывапролджэячсмитьбю'

// let result = ''
// for(let i=0; i<str.length; i++){
//    const index = eng.indexOf(str[i])
//    result += rus[index]
// }
// console.log(result)



// const str = prompt('Enter translited string')
// const relations = {
//    'q':'й',
//    'w':'ц',
//    'e':'у',
//    'r':'к',
//    't':'е',
//    'y':'н',
//    'u':'г',
//    'i':'ш',
//    'o':'щ',
//    'p':'з',
//    '[':'х',
//    ']':'ъ',
//    'a':'ф',
//    's':'ы',
//    'd':'в',
//    'f':'а',
//    'g':'п',
//    'h':'р',
//    'j':'о',
//    'k':'л',
//    'l':'д',
//    ';':'ж',
//    "'":'э',
//    'z':'я',
//    'x':'ч',
//    'c':'с',
//    'v':'м',
//    'b':'и',
//    'n':'т',
//    'm':'ь',
//    ',':'б',
//    '.':'ю',
// }

// let result = ''
// for(let i=0; i<str.length; i++){
// result += relations[str[i]]
// }
// console.log(result)




// const names = ['Alex','Angelina', 'Vlad','Julia','Ira']
// const faculties = ['Maths','Arts','Economics','Enginering']
// const N = + prompt('Enter amount of students')
// const students = []

// for(let i = 0; i < N; i++){
//    const nameIndex = Math.floor(Math.random() * names.length);
//    const facultyIndex = Math.floor(Math.random() * faculties.length);
//    students.push({
//       name: names[nameIndex],
//       faculties: faculties[facultyIndex],
//       mark: Math.round((Math.random() * 6 + 4)*10) / 10
//    })
// }

// console.table(students)

// let sum = 0;
// for(let i = 0; i < N; i++){
//    sum += students[i].mark;
// }
// const averageMark = sum / students.length
// console.log(averageMark)

// const highMarkStudents = []
// for(let i = 0; i < N; i++){
//    if(students[i].mark >= averageMark){
//       highMarkStudents.push(students[i])
//    }
// }
// console.table(highMarkStudents)


// const N = + prompt('Enter amount of persons')
// const names = ['Lidia', 'Vera','Stanislav','Ilia','Andrei','Nadia','Roman','Anna']
// const person = []
// const timeStampFrom = new Date('1980-01-01').getTime()
// const timeStampTill = new Date('1998-03-10')

// for(let i = 0; i < N; i++) {
//    const nameIndex = Math.floor(Math.random() * names.length)
//    const personHeight = Math.round(Math.random() * 70 + 140)
//    const birthTimeStamp = Math.round(Math.random() * (timeStampTill - timeStampFrom) + timeStampFrom)

//    person.push({
//       name: names[nameIndex],
//       height: personHeight,
//       birthday: new Date(birthTimeStamp)
//    })
// }
// console.log(person)

// const peopleFutureBDay = [];
// const today = new Date()

// for(let i = 0; i < N; i++) {
//    if(person[i].birthday.getMonth() >= today.getMonth()){
//       peopleFutureBDay.push(person[i])
//    }
//    if(person[i].birthday.getMonth() === today.getMonth()){
//       if(person[i].birthday.getDate() >= today.getDate()){
//          peopleFutureBDay.push(person[i])
//       }
//    }
// }

// console.table(peopleFutureBDay)
// let totalHeight = 0;
// let averageHeight = 0;

// for(let i = 0; i < peopleFutureBDay.length; i++) {
//    totalHeight += peopleFutureBDay[i].height 
//    averageHeight = totalHeight / peopleFutureBDay.length
// }
// console.log(averageHeight)



// function getRandomNumber (a, b) {
//    return Math.round(Math.random() * (b - a) + a)
// }

// console.log(getRandomNumber(5, 20))



// const getRandomNumber = (a, b) => Math.round(Math.random() * (b - a) + a)
// console.log(getRandomNumber(5, 20))


// const getRandomString = (n) =>{
//     const eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let str = []

//     for(let i = 0; i < n; i++) {
//       let getLetterId = Math.round(Math.random() * eng.length)
//       str.push(eng[getLetterId])
//     }
//    return str.join('')
// }

// console.log(getRandomString(20))



// function getAverage () {
//    const len = arguments.length;
//    let sum = 0;
//    for(let i = 0; i < len; i++){
//       sum += arguments[i]
//    }
//   return sum / len;
// } 

// console.log(getAverage(3,5,9,45))


// const getAverage = (...items) => {
//    const len = items.length;
//    let sum = 0;
//    for(let i = 0; i < len; i++){
//       sum += items[i]
//    }
//   return sum / len;
// }

// console.log(getAverage(3,5,9,45))