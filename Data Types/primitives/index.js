const john = {
    name: "John",
    sayHi: function() {
        alert("Hi buddy")
    }
}

john.sayHi()

let str = "Hello";
console.log(str.toUpperCase())

// Numbers


let number = 255;
console.log(number.toString(16), number.toString(2));


console.log(isNaN(NaN));
console.log(isNaN("str"));

console.log(NaN === NaN);

console.log(isFinite("15"));

console.log(parseInt('100px'));
console.log(parseFloat('12.5em'));

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

function sum(a, b) {
    return a + b
}

console(`Sum of 2 + 3 = ${sum(2,3)}`)
console.log(`My length is`.length);

let arr = new Array();
let arr1 = []

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);
console.log(fruits[1]);

fruits[2] = "Pear";

console.log(fruits.length);

const arrExample = ['Apple', {name: "John"}, true, function() {console.log('hey');}]

console.log(arrExample[1].name);
arr[3]()



let kop = ["Apple", "Orange", "Plum"]
console.log(fruits.at(-1));

kop.pop();

kop.shift();

kop.unshift("Apple");
kop.push("Orange", "Peach");

/**
 * Big O complexity push/pop
 * 
 *  */ 


let stuff = ["Not", "In", "The", "Stuff"];
for (let index = 0; index < stuff.length; index++) {
    console.log(stuff[index]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

stuff.length = 1 // it is writable property so now there is only one item in the array

let arr2 = new Array('Apple', "Pear", "etc");

const matrix = [[1,2,3], [1,2,3]]

[1,2].concat([3,4]).concat({0: "something", length: 1}).forEach(item => console.log(item))
let user = ["john", "jim"].find(item => item == "John")


let test = ['Yo', 'dude']
let [firstName, surName] = test