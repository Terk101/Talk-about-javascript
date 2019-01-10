let obj = {
    message : 'Hi',
    printMessage : function(name) {
        console.log(this.message +' '+ name );
    }
}

obj.printMessage('Tantai');
console.log(obj.name);

let newObje = {} //Create empty object.
newObje.name = 'Terk';
console.log(newObje.name);

let dog = {} //"object literal" syntax

let cats = {
    name : 'Doraamon',
    age : '30'
};
cats.hight = 5;

console.log(cats.hight);

//Copy by values
let message = "Hello!";
let phrase = message;

//Copy by reference
// let user = { name: "test1" };

// let admin = user;


let user = { name: 'john' };

let admin = user;

admin.name = 'Peter';

console.log(user.name);