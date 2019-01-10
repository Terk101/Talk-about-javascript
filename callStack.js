/*
const fn1 = () => {
    console.log('Fn1 call....');
}

const fn2 = () => {
    fn1();
    console.log('Fn2 calling...');
}

fn2();
*/

/*
ก่อนที่จะอธิบายการทำงานต่อไป ขอให้เราจินตนาการ call stack เหมือนการคว่ำจานซ้อนกัน
จานใบสุดท้ายที่เราคว่ำก็คือจานบนสุด ฉะนั้นแล้วจานใบแรกที่คว่ำอยู่ล่างสุดจะต้องเป็นใบสุดท้ายที่เราหยิบออก
call stack ก็เช่นกัน ตอนนี้เรายัดทั้ง fn2 และ fn1 ลงใน call stack แล้ว ไม่มีอะไรให้เรายัดลงไปอีก 
JavaScript จึงเริ่มประมวลผลตามลำดับด้วยการ…
หยิบจานใบบนสุดคือ fn1 ออกจาก call stack ดึงออกมาทำงานนั่นคือพิมพ์ fn1 ออกหน้าจอ
เสร็จแล้วจึงหยิบจานใบถัดไปคือ fn2 ที่มีการทำงานคือพิมพ์ fn2 ออกหน้าจอ
*/

//In case having call back function
/*
const fn1 = () => {
    console.log('Fn1 wass calling...');
}

const fn2 = () => {
    setTimeout(fn1, 1000);
    console.log('Fn2 was calling...');
}

fn2();
*/

/*
ในช่วงเวลาใดเวลาหนึ่งที่ 100 มิลลิวินาทีผ่านไป 
JavaScript Engine จะเคลื่อน fn1 ออกจาก 
Event Table แล้วใส่ลงไปที่ Event Queue เพื่อรอทำงาน
 ถามว่าทำไมถึงไม่ทำทันที? นั่นเป็นเพราะมันชื่อ อีเวนต์คิว เลยต้องรอคิวทำงาน 
 โดยสิ่งที่มันรอคือ รอให้ของทุกชิ้นใน Call Stack ทำงานหมดก่อน จากนั้นของใน 
 Event Queue ซึ่งก็คือ fn1 จึงจะเคลื่อนไปอยู่ใน Call Stack เริ่มการทำงานถัดไป
*/

const fn1 = () => {
    setTimeout(() => {
        console.log('Fn1 was calling..')
    }, 2000);
}

const fn2 = () => {
    fn1();
    setTimeout(() => {
        console.log('Fn2 wass calling..');
    }, 1000);
}

const fn3 = () => {
    fn2();
}
fn3();