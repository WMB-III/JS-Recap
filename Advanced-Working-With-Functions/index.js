// Comeback to recursion in the morning



// args is an array
function sumAll(...args) {
    let sum = 0;
    
    for (let arg of args) sum += arg;
    
    return sum;
}

console.log(sumAll(1,2,3))

let arr = [1,2,3]


//Object.assign and spread syntax are the same. We can create a copy of the object
console.log(Math.max(...arr));


//Closure

function makeCounter() {
    // Function inside a function remembers the state of the outer function
    let count = 0;

    return function() {
        return count++
    }
}

let counter = makeCounter()

counter(); counter();


//var is bad, it is hoisted and can be redeclared..use let and const


// functions are objects

let sayHi = function func(who) {
    if (who) {
        console.log(`Hello ${who}`);
    } else {
        func("Guest")
    }
}

// Decorators and forwarding, call/apply. Look up later.


// Function binding, bining "this" to a user.

// Prototype inheritance

let animal = {
    eats: true,
    walk() {
        console.log("Animal")
    }
};

let rabbit = {
    jumps: true,
    // Rabbit also has an eats property
    __proto__: animal 
}


// A class is a function
class User {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(this.name)
    }
}

class Admin extends User {
    snitch() {
        console.log("someone is logging in")
    }
}

class User {
    static staticMethod() {
        console.log('yo')
    }
}


class CoffeeMachine {
    //protected properties should only be used inside the class
    _wateAmount = 0
}



class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

class Rabbit {}
let blackRabbit = new Rabbit();

console.log(blackRabbit instanceof Rabbit)


try {

} catch (err) {
console.log(err)
}