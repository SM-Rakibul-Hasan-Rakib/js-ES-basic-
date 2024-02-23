// task-3 access and then shoew habluder adda
let data2 = {
  data: 
  [
    {
      bookId: 1,
      bookDetails : {
        name: "habludar adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",

    },
    {
      bookId: 2,
      bookDetails : {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    }
  ]
}

const value =data2.data[0].bookDetails.name;
console.log(value);



// 1. you have an odd array (array wih odd numbers).[1, 3, 5, 7, 9].Now this array into an en=ven array (array eith even numbers ). [2, 4, 6, 8 ,10].Do using for loop and array Map() method.hints add one number and it  will become and it will become an even number
