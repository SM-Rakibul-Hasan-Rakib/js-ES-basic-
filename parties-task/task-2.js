// task-2 : console.log output : peterburg,console.log : output Herry

let student = {
  2222: {
    name: "jack",
    selection: "C",
    class: "IX",
    address: {
      "building no": 12,
      "street":"St. jonson",
      "City": "Petersburg",
      "country":"UK",
    }
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      "street" : "DC road",
      "city" : "Kachukhet",
      "country" : "Bangladesh",
    }
  }
}

const city = student[2222].address.City;
const name =student[3333].name;
console.log(name);
console.log(city);