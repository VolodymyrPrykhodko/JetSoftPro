// 12    q`*/submit homework to the repository that you created for git lecture

// 1. Compute the exponent of a number (using recursion);
// 8^2 = 8 x 8 = 64

const exponent = (num, exp) => {
  return exp === 0 ? 1 : num * exponent(num, exp - 1);
};

console.log(exponent(5, 2));
// 2. Write functions min and max that will find min and max number in array using apply
const numbers = [123, 45, 931];
const min = () => {
  return Math.min.apply(null, numbers);
};

const max = () => {
  return Math.max.apply(null, numbers);
};

console.log(min());
console.log(max());
// 3. write a function displayCarDetails that will receive as argument ownerName
//    and return a string with car registration number, branch and color.
//    Please make examples for three different cars

const car1 = {
  id: 1,
  brand: "BMW",
  "registration number": 245,
  color: "red",
};

const car2 = {
  id: 2,
  brand: "Lamborghini",
  "registration number": 346,
  color: "green",
};

const car3 = {
  id: 3,
  brand: "Merecedes Benz",
  "registration number": 124,
  color: "blue",
};

function displayCarDetails(ownerName) {
  console.log(
    `This is ${this.brand} of ${this.color} color with ${this["registration number"]} registration number. Owner is ${ownerName}.`
  );
}

displayCarDetails.call(car1, "Mike");
displayCarDetails.call(car2, "Nick");
displayCarDetails.call(car3, "John");
// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

function greet(person) {
  if (person.name === "amy") {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
const amy = { name: "amy" };
greet(amy);

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

function doSetTimeout(i) {
  setTimeout(() => console.log(i), 0);
}

for (var i = 0; i < 4; i++) {
  doSetTimeout(i);
}

for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 0);
  })(i);
}
