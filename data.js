// data access
const data = [{ id: 1, name: "abdul", address: "kochu khet" }];

console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo laptop", price: 65000 },
    { id: 2, name: "macbook", price: 165000 },
  ],
};
// second product price
console.log(products.data[1].price);








// users
const user = {
  id:5001,
  name:'Shoriful Raj',
  address: {
    street:{
      first:'54/1 uttor site',
      third: 'no dorai',
    },
    city: 'Dhaka'
  }
}

console.log(user.address.street.first);


const user2 = {
  id: 5002,
  name: 'pori bibir majar',
  address: {
    city:'chittagong',
    country:'Bangladesh'
  }
}

console.log(user1.address.street?.second);
console.log(user2.address.street.second);