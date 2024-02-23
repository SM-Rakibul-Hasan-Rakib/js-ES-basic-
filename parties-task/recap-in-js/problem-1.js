// 8 ways to get undefine
//1. variable that is not inttialized will give undefined
// 2.funcation no return
// 3.parameter that is not passed will be undefined
// 4.If return has nothing on the right side will return undefined.
// 5.property that doesn't exists on an object will give you undefined
let first;

function second(a, b) {
  const total = a + b;
}

const result = second();

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
third(2, 5);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const total = noNegative(2, -5);
console.log(total);
// console.log(result);

const fifth = { id: 2, name: "ponshom", age: 40 };
console.log(fifth.age, fifth.salery);

const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1],sixth[5], sixth[200]);
