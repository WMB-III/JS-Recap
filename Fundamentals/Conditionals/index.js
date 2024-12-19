let year = 2015

if (year == 2015) console.log('The year is 2015');

if (year == 2015) {
    console.log("SWEEEET")
    console.log("The year is 2015")
}



// 0 is falsey
if (0) {
 // This will not run
}

// 1 is truthy
if (1) {
// This will run
}



let yearCheck = (year == 2015);

if (yearCheck) {
    // Do something if the year is 2015
}

if (year == 2015) {
    console.log('year is 2015')
} else {
    console.log("It aint 2015")
}

if (year < 2015) {
    console.log('year is less than')
} else if (year > 2015) {
    console.log('year is greater than 2015')
} else {
    console.log('year is exactly 2015 ')
}


// conditional operant

let result = 2 > 4 ? "2 is not greater than four" : "Four is greater than 2"

console.log(result) // Four is greater than 2

// You can do multiple question marks but it is not advised