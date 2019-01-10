function hello() {
    console.log('---------');
    console.log('Hello');
    console.log('---------');
}

hello(); //Invock a funcion.

let hi = hello // get the reference of hello fucntion

hi();

// function can be argument
setTimeout(hi, 500);

let counter = 0;
function count() {
    setTimeout(function() {
        console.log('H! '+ counter++);
        count();
    }, 200);
}

//count();

//Function expression
(function () {
    console.log('Hello call me immediately');
})();