function sayHi() {
    console.log('Hello')
}

let sayHi2 = function() {
    console.log('Yoooo')
}



function ask(question, yes, no) {
    return yes() ? question == 2 : no()
}

function yesResult() {
    console.log('Correct')
}

function noResult() {
    console.log("No result")
}

ask(2, yesResult, noResult)


let sum = (a,b) => a + b;

console.log(sum(2,3))