/*
console.log("Hello World");
let age = 18;
let name = "Bunny";
console.log(name, age);
age = 20;
console.log(name, age);
console.log(typeof name);
const iscool = true;
console.log(typeof iscool);
let a = 10;
let b = 15;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);
console.log("Hello" + " " + name);
console.log(`Hello ${name}`);
console.log(name === age);
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
const marks = 85;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("C");
}
function greet(name) {
  console.log(`Hiii ${name}`);
}
greet("Sreekar");
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
let car_name = prompt("Enter car name");
console.log(car_name);
let mark = Number(prompt("Enter marks:"));
console.log(10 + mark);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
const cars = ["Supra", "GTR", "BMW"];
console.log(cars[0]);
console.log(cars.length);
cars.push("Porsche");
cars.pop();
cars.pop();
cars.unshift("Ferrari");

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
for (let car of cars) {
  console.log(car);
}
const car = {
  brand: "Toyota",
  model: "Supra",
  year: 1998,
};
console.log(car.brand);
console.log(car.model);
car.year = 2002;
car.color = "Red";

const cars = [
  {
    brand: "Toyota",
    model: "Supra",
  },
  {
    brand: "Nissan",
    model: "GTR",
  },
];
console.log(cars[0].model);
console.log(cars[1].brand);

const students = [
  {
    name: "Sreekar",
    marks: 95,
  },

  {
    name: "Rahul",
    marks: 72,
  },

  {
    name: "Arjun",
    marks: 88,
  },
];
for (const student of students) {
  console.log(student.name);
}
for (const student of students) {
  if (student.marks >= 90) {
    console.log(student.marks);
  }
}
  */
const students = [
  { name: "Sreekar", marks: 95 },
  { name: "Rahul", marks: 72 },
  { name: "Arjun", marks: 88 },
];

students.forEach((student) => {
  console.log(student.name);
});
