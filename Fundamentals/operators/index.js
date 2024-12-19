let one = 1
one = -one 
console.log(one) // will be -1 because of the unary operator -

console.log( 3 - 2) //this is a binary operator because it has two+ operands


console.log(+true)//will give you one true === 1
console.log(+"");//will give you 0 false === 0



//Assignment returns a value so its an operation, you can also chain assignment

let a,b,c;

a = b = c = 2 + 2;

//increment and decrement.

let counter = 2
counter++
console.log(counter) // 3

counter--;
console.log(counter) // 2


counter++ // will return 2
// ++counter will return 3