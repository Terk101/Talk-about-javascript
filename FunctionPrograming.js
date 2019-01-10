//Pure function
function pluse(a, b) {
    return a + b;
}
console.log(pluse(5, 10));

//First class function
let func = function firstFunctionPluse(a, b) {
    return a + b;
}

console.log(func(5, 6));

//Imperative  style
function pluseOne(arr) {
    if (arr.length == 0) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i]++;
    }
    return arr;
}
let numbers = [5, 6, 7, 8, 9, 10];
let newPluseOne = pluseOne(numbers);
console.log(newPluseOne);

//Functional style
let newNumber = numbers.map(x => x+1);
console.log("Number funtional style ==> "+ newNumber);