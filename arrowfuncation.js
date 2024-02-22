// single parameter
const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;
const getAge = (person) => person.age;
const student = { name: "rakibs", age: 18 };
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([5, 9, 66, 2, 11]);
console.log(third);

// no parameter
const getPI = () => math.getPI;
console.log(getPI());

// large arrow funcation
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multi = x * y * z;
  const result = sum * multi;
  return result;
};
