let output = arr.reduce((pre, curr) => {
  //    pre={saho:22;}
  // curr= { name: "subhashree", alternativename: "aunty", age: 28, bf: "abc" },
  if (ispromted == true) {
    if (pre.promoted == undefined) {
      pre.promoted = 1;
    } else {
      pre.promoted++;
    }
  }
  return pre;
}, {});

arr = [
  { name: "susree", age: 18, bf: "abc" },
  { name: "saho", age: 22, bf: "abc" },
  { name: "subhashree", alternativename: "aunty", age: 28, bf: "abc" },
];
