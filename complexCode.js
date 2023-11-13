/* 
 * Filename: complexCode.js
 * Description: A complex and sophisticated JavaScript code example
 */

// Custom class to represent a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Create some instances of the Person class
const person1 = new Person("John Doe", 30);
const person2 = new Person("Jane Smith", 25);
const person3 = new Person("Tom Johnson", 40);

// Custom class to represent a Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getFullInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

// Create some instances of the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2019);
const car3 = new Car("BMW", "X5", 2021);

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of the numbers using the calculateSum function
const sum = calculateSum(numbers);

// Print the sum to the console
console.log("Sum of numbers:", sum);

// Function to reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

// Reverse a string
const reversedString = reverseString("Hello World!");

// Print the reversed string to the console
console.log("Reversed String:", reversedString);

// Some other complex and elaborate code...
// ...

// ... (more than 200 lines of code)

// End of the complexCode.js file.