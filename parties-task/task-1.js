let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary:
        [
          {school_name:"ABC primary school"},
          {location:"peters burg"}
        ]
      },
    {
      secondary:
      [
        {school_name:"ABC secondary school"},
        {location:"St Lorence"}
      ]
    }
    ]
  }
}

// secondary_school = data["sophia"]["study"][1]
// console.log(secondary_school);

let secondarySchool=data.sophia.study[1];
console.log(secondarySchool);

