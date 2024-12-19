let user = null 

console.log(user?.address.street) // undefined


let userAdmin = {
    admin() {
        console.log('I am admin')
    }
}


let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // Nothing happens