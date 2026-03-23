// ----------1----------
let numbers = [1, 2, 3, 4, 5];
let square = numbers.map((num) => num * num);
console.log("---1---\n", square);
// ----------2----------
let people = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 31 },
  { name: "Charlie1", age: 38 },
  { name: "Charlie2", age: 48 },
  { name: "Charlie3", age: 58 },
];
let plus30 = people.find((person) => person.age > 30);
console.log("---2---\n", plus30);
// ----------3----------
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers2.filter((num) => num % 2 === 0);
console.log("---3---\n", even);
// ----------4----------
let fruits = ["apple", "banana", "cherry", "date"];
let result = fruits.some((fruit) => {
  for (let index = 0; index < fruit.length; index++) {
    if (fruit[index] === "s") {
      return true;
    }
  }
});
console.log("---4---\n", result);
// ----------5----------
let numbers3 = [1, 2, 3, 4, -5];
let result1 = numbers3.every((num) => num > 0);
console.log("---5---\n", result1);
// ----------6----------
let people1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
  { name: "Dave", age: 28 },
];
let pluss30 = people1
  .filter((person) => person.age > 30)
  .map((person) => person.name);
console.log("---6---\n", pluss30);
// ----------7----------
let students = [
  { name: "Alice", age: 20, grades: [70, 80, 90] },

  { name: "Bob", age: 22, grades: [60, 65, 70] },

  { name: "Charlie", age: 23, grades: [80, 85, 90] },

  { name: "Dave", age: 21, grades: [50, 60, 55] },
];
let plusAvg = students
  .filter((student) => {
    let sum = 0;
    for (let index = 0; index < student.grades.length; index++) {
      sum += student.grades[index];
    }
    sum = sum / student.grades.length;
    if (sum > 75) {
      return student;
    }
  })
  .map((person) => person.name);
console.log("---7---\n", plusAvg);
// ----------8----------
let products = [
  { name: "Laptop", category: "electronics", price: 999 },

  { name: "Headphones", category: "electronics", price: 49 },

  { name: "Keyboard", category: "electronics", price: 29 },

  { name: "Shoes", category: "clothing", price: 79 },

  { name: "T-shirt", category: "clothing", price: 19 },
];
let newProduct = products.filter(
  (product) => product.category === "electronics" && product.price < 100,
);
console.log("---8---\n", newProduct);

// ----------2.2----------
let array = ["dasd", "dcasdas", "dbasda", "daadads"];
const alphabet = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
};
let nadew = array.sort();
console.log("---Name Sort---\n", nadew);

// for (let i = 1; i <= array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//       if(array[i]===Object.keys(alphabet))
//   }
// }
// console.log("---2.2---\n", array);
