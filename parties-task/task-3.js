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

