// var : no reason to use var 
// let : allow it to reassign
// const : do not allow it to reassign


const money = 26;
const rich = money + 500 ;
console.log(rich);

let count = 10;
count = count + 10 ;
console.log(count); 

const number = [23, 4 , 24 ,13 ,45 ];
number[1] = 55;
number.push(8,9,56,45);
console.log(number);

// object 

const student = {
  name: 'moyna pakhi',
  class: 12,
  age:90,
}
student,name = 'moyna khonti',
console.log(student);