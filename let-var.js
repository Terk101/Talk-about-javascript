function varScope(condition) {
    if (condition) {
        var value = 'Black';
        console.log(value);
    } else {
        console.log(value);

    }
}

varScope(true);


function one() {
    return function() {
        console.log('one');
    }
}

let getOne = one();

console.log(getOne)(;
