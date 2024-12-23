const {myName, add} = require("./utils")
const {getNotes} = require('./notes')
const validator = require('validator')
const chalk = require('chalk')

console.log(myName);
console.log(add(2,3))
console.log(getNotes())
console.log(validator.isEmail('example.com'));
console.log(validator.isEmail('example@gmail.com'));
console.log(chalk.green('Success!'));
