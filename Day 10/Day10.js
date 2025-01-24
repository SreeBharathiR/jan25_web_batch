// assignement operators

// var a = 30;
// console.log(a);

// a += 5;
// console.log(a);
// a -= 5;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 3;
// console.log(a);

// comparision operator
// let k = "kasi";
// let b = "bala";
// console.log(k === b);

// let k = 102;
// let b = "102";
// console.log(typeof k);
// console.log(typeof b);
// console.log(k === b);

// console.log(5 >= 3);

// let a = 5;
// let b = 10;
// let c = 15;
// console.log(c < b || a < c || a > b);
// console.log(a < b && a < c && b > c);
// console.log(!(a > c));

let value = "dog";
// if (value === "person") {
//   console.log("Open the door");
// } else if (value === "cat") {
//   console.log("Open the door for cat");
// } else if (value === "dog") {
//   console.log("Open the door for dog");
// } else {
//   console.log("Don't open the door");
// }

switch (value) {
  case "person":
    console.log("Open the door");
    break;
  case "cat":
    console.log("Open the door for cat");
    break;
  case "dog":
    console.log("Open the door for dog");
    break;
  default:
    console.log("Don't open the door");
}

// ternary operator

value === "dog" ? console.log(true) : console.log(false);
