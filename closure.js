//closure 1
/*
function print() {
    let name = 'Tantai Janpong'; //This variable still alive although the print function out of scope
    return function () {
        console.log('Hello ' + name); //This name hold in the closure it can be assess and change the value;
    }
}

let printMessage = print();

printMessage();
printMessage();
*/

//closure 2
/*
function print(lastName) {
    // ภายใต้ฟังก์ชันนี้ตัวแปร lastName ไม่หายไปไหน
    return function (firstName) {
        console.log(`${firstName} ${lastName}`);
    }
}

 //ภายหลังเรียก print ตัวแปร lastName ควรถูกทำลาย
 // แต่ด้วยความสามารถของ closure ทำให้ตัวแปรนี้ยังคงอยู่
  //และเข้าถึงได้จากฟังก์ชันภายใน
 
let callPrint = print('Janpong');
callPrint('Tantai');
callPrint('Mix');
*/

//closure 3
/*
let sum = 0 // sum variable declare to grobal scope then i can change any where

function add(value) {
    sum += value;
}
console.log(sum);
add(1);
console.log(sum);
sum = 2; // because sum is grobale scope it can change any where in the function.
console.log(sum);
*/


//Immediately-Invoked Function Expression (IIFE)
//closure 4
/*
let sum = 0;
const utils = (
    function () {
        // sum variable use in only local scope differnce form sum outer scope
        let sum = 0
        return {
            add(value) {
                sum += value;
            },
            getSum() {
                return sum;
            }
        }
    }
)();

let utils = (
    function () {
        let x = 0;
        return {
            addX(number) {
                x += number;
            },
            getX() {
                return x;
            }
        }
    }
)();
// เนื่องจากของข้างในเป็นฟังก์ชัน เราต้องการเรียกใช้ฟังก์ชันทันทีจึงใส่ () เข้าไป
// ผลลัพธ์ที่ได้จากการเรียกฟังก์ชันนี้จะคืนค่าเป็นอ็อบเจ็กต์ที่ประกอบด้วย add และ getSum
// เรียกเทคนิคนี้ว่า IIFE

console.log(sum);
utils.add(1);
console.log(utils.getSum());
utils.add(3)
console.log(utils.getSum());
*/

function sayHi(name) {
    return function() {
        return 'Hi' + name;
    }
}

let terk = sayHi('Terk');
console.log(terk());
/*
A JavaScript closure is a function that has a pointer reference to a free variable. A free variable 
is one that has fallen out of scope after its parent function has returned. However, if that outer 
function still has some reference to the free var (normally through a function that gets returned, 
or through a method property), the variable will not get garbage collected because it will have a 
non-zero reference count. 
Thus, from outside the function, we can still access the inner variable by means of the closure.
*/




