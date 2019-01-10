let a = 'hello';
function doSomething() {
  console.log(a);
  let b = 'Hi';
  if (a != '') {
    console.log(a); // variable a still in the scope
    let e = 'Nice';
  }
  //consol.log(e);  //variable e no longer exit
}

doSomething();

//console.log(b); //Variable b no longer exit.

function simple(...z) {
  for (let i = 0, j = z.length; i < j; i++) {
    console.log(z[i])
  }
}

function simples(a, b, c) {
  console.log(a, b, c, )
  console.log(arguments[0], arguments[1], arguments[2])
}

simples('a', 'b', 'c')
//Object one data element and have many attibute
//Array 


let car = { //car variable hold object reference
  make: 'bmw',
  year: '2018',
  model: 'BWM256I',
  decscription: function () {
    console.log('Brand ' + this.make + ' Year : ' + this.year + ' Model ' + this.model);
  }
}

car.decscription();

let anotherCar = {};
anotherCar.name = 'xxx';
console.log(anotherCar);

var c = {
  myProperty : [ // arrays of object
    {a : 'a'},
    {b : 'b'}
  ]
}