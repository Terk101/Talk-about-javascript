let studentsAge = [17, 16, 18, 19, 21, 17]; 
let studentCanDring = studentsAge.filter(x => x > 18);
studentCanDring.forEach(x => console.log(x));

let studentName = ['Student1', 'Student2', 'Student3', 'Student4'];
let studentNamePlusePrefix = studentName.map(x => 'นาย '+x);
console.log(studentNamePlusePrefix);