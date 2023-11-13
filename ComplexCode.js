/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation
*/

// Declare a class named Employee
class Employee {
  constructor(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
  }

  // Declare a method to calculate bonus based on department and age
  calculateBonus() {
    let bonus = 0;
    if (this.department === "IT") {
      bonus = this.salary * 0.1;
    } else if (this.department === "HR") {
      bonus = this.salary * 0.08;
    } else {
      bonus = this.salary * 0.05;
    }

    if (this.age > 45) {
      bonus += this.salary * 0.02;
    }

    return bonus;
  }
}

// Create instances of Employee class
const emp1 = new Employee("John Doe", 35, "IT", 5000);
const emp2 = new Employee("Jane Smith", 50, "HR", 6000);
const emp3 = new Employee("Michael Johnson", 40, "Sales", 4000);

// Calculate and display bonuses for each employee
console.log(emp1.calculateBonus()); // Output: 500
console.log(emp2.calculateBonus()); // Output: 560
console.log(emp3.calculateBonus()); // Output: 200

// Declare a function to sort employees based on their bonus
function sortEmployeesByBonus(employees) {
  return employees.sort((a, b) => b.calculateBonus() - a.calculateBonus());
}

// Create an array of employees and sort them by bonus
const employees = [emp1, emp2, emp3];
const sortedEmployees = sortEmployeesByBonus(employees);

console.log(sortedEmployees);
// Output: [{ name: 'Jane Smith', age: 50, department: 'HR', salary: 6000 },
//          { name: 'John Doe', age: 35, department: 'IT', salary: 5000 },
//          { name: 'Michael Johnson', age: 40, department: 'Sales', salary: 4000 }]

// Declare a class named Rectangle
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  // Declare a method to calculate the area of the rectangle
  calculateArea() {
    return this.length * this.width;
  }
}

// Create instances of Rectangle class
const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(7, 3);
const rectangle3 = new Rectangle(4, 6);

// Calculate and display area for each rectangle
console.log(rectangle1.calculateArea()); // Output: 50
console.log(rectangle2.calculateArea()); // Output: 21
console.log(rectangle3.calculateArea()); // Output: 24

// Declare a function to find the largest rectangle based on area
function findLargestRectangle(rectangles) {
  let largestRectangle = rectangles[0];
  for (let i = 1; i < rectangles.length; i++) {
    if (rectangles[i].calculateArea() > largestRectangle.calculateArea()) {
      largestRectangle = rectangles[i];
    }
  }
  return largestRectangle;
}

// Create an array of rectangles and find the largest one
const rectangles = [rectangle1, rectangle2, rectangle3];
const largestRectangle = findLargestRectangle(rectangles);

console.log(largestRectangle);
// Output: { length: 5, width: 10 }
