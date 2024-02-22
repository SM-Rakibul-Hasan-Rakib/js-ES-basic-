const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5 ,2, 45, 5, 43, 90, 32 ,15];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// ude spread operator to copy
const friends = [4,5,87,9];
const  bhondu = friends;
bhondu.push(12);
console.log(...bhondu);

// advance c
const sokina =  [...friends,9999]
console.log(sokina);