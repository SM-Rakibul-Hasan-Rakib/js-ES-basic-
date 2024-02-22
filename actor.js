const actor = {
  name:'Rakib',
  age:30,
  phone:'01978398123',
  money:1234568
}

const {phone, age, name} = actor;
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(name);
console.log(age);

// array destruct
const numbers = [45,99]
const [first, second] = numbers;
const [x,y] = [12,66]

//
function doubleThem(a,b){
  return[a*2, b*2];
}