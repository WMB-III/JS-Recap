let startingPoint = 1

while (startingPoint < 3) {
    startingPoint++;
}


startingPoint = 1
do {
    // Perform an action
    startingPoint++
} while (startingPoint < 3)



for (let index = 0; index < 3; index++) {
    console.log(index)
}    


// Continue on a conditions, we want to reduce the nesting of blocks
for (let index = 0; index < 3; index++) {
    if (index % 2 == 0) continue;
}

// Use break and loop lables to break out of nested loops



 let fruit = 'apple';
 switch (fruit) {
    case 'apple':
    case 'aple':
        console.log('WOW, the fruit is an apple')
        break;
    case 'pear':
        console.log("I have lost weight because I eat pairs")
        break;
    default:
        console.log("we dont know you")
 }


// "Global variable" Lives after declaration
 let firstPart = 'Show'

 function showMessage() {
    // Local variable only lives in th function
    let secondPart = 'message'
    console.log(`${firstPart} ${secondPart}`)
 }

 showMessage()


 function showMessage2(from, text) {
    console.log(`${from} ${text}`)
 }

 showMessage2('William', 'Work')

 // Default values

 function showMessage3(from, text = 'no text given') {
    console.log(`${from} ${text}`)
 }

 showMessage3('Williame')


 function showMessage4(message) {
    return message
 }

 showMessage4('Yo')

 const result = showMessage4('lol')