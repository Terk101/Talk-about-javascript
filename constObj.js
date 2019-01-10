const user = {
    name : 'terk'
}
user.age = 50;
console.log(user.age);

//It working find but if you want to reassignt new reference to user it will throw exception
// user = {
//     name : 'test'
// }


let a = {};
let b = {};

Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

console.log(b.isEmpty());

console.log(a===b);