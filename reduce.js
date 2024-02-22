const players = [5,99, 2, 80, 90, 45, 75, 65, 67, 12, 34, 56];
const total = players.reduce((previous,current) => previous + current, 0)

console.log(total);


const numbers = [5,99, 2, 80, 45, 54, 655, 343 , 90, 45, 75, 65, 67, 12, 34, 56];
const sum = numbers.reduce((p,c) => p + c, 0)
console.log(sum);