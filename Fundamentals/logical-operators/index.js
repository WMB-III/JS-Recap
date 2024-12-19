let hour = 9 


// || finds th first truthy value and then executes the code within the block. It will stop at the first thing that is true
if (hour < 10 || hour > 18) {
    console.log('The office is cool.')
}


// && if everything is true

let twelveHour = 12;
let thirtyMinute = 30;

if (twelveHour == 12 && thirtyMinute == 30) {
    console.log('The time is 12:30')
}


// If the first operant is truthy && will return the second one 

let returnAfterMe = true 

console.log(returnAfterMe && 'Send me to the console!!!!')


// The operand ! returns the inverse
console.log(!true); // false
console.log(!0); // true



 if (age >= 14 && age <= 90) {
    console.log('age is between 14/90')
 } else {
    console.log('age is not between either of those')
 }

