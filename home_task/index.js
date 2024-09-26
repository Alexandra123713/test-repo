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




const string = prompt('Enter a text')

let count = 0;

for(let i=0; i<string.length; i++){
    if(string[i] === ' '){
        count ++
    }
}

count ++;

console.log(count)

const averageLength = (string.length-(count - 1)) / count;

console.log('The length of the string is ' + count)

console.log('The average length of word is ' + averageLength)


