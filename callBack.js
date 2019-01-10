function doSomeThing(subject, callBack) {
    callBack();
    console.log(`Starting my ${subject} homework.`);
}

// doSomeThing('Match', function () {
//     console.log('I did it last.');
// });

function one() {
    console.log('Do first!.');
}

function two() {
    console.log('I will do second!');
}

setTimeout(one, 500);
two();

