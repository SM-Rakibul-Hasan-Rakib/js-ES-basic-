// odd numbers 
// const oddArray = [1, 3, 5, 7, 9];
// const evenArray = [];

// for(let i = 0; oddArray.length; i++) {
//   evenArray.push(oddArray[i] * 2);
// }

// console.log("Even Array using for loop:", evenArray);

const oddArray = [1, 3, 5, 7, 9];
const evenArrayUsingForLoop = [];

for (let i = 0; i < oddArray.length; i++) {
  evenArrayUsingForLoop.push(oddArray[i] * 2);
}

console.log("Even Array using for loop:", evenArrayUsingForLoop);
