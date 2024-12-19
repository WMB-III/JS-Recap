// Object constructor syntax
let user = new Object()
user = {}



// Object literal syntax
user = {
    name: "John",
    age: 30
}


console.log(user.name, user.age);

user.isAdmin = true;

delete user.age;


function makeUser(name, age) {
    return {
        name,
        age
    }
}

let user = {name: "John"}

console.log( "name" in user);

for (let key in user) {
    console.log(key, user[key])
}


//objects reference
let a = {}
let b = a
console.log(a === b ) // In memory the refer to the same location


// Cloning
let permission1 = {canView: true}
let permission2 = {canEdit: true}

Object.assign(user, permission1, permission2)

let deepObject = {
    levelOne: "level one",
    levelTwo: {
        secondLevel,
    }
}

let clone = structuredClone(deepObject)
console.log(clone)



// The this keyword will refer to whatever object it is insie of
let user = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name)
    }
}

const user2 = {
    name: 'Jake',
    sayHi() {
        let arrow = () => alert(this.name)
    }
}


// Constructor, operator "new"

function user(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack")
console.log(user.name, user.isAdmin)



