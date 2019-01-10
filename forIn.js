let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let cat = {
  name : 'doraamon',
  age : '39'
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

for(let key in cat) {
    console.log(cat[key]);
}