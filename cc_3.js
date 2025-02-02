// Task 1 Product Price Management Scenario
// Decleared array of prices 
let prices = [20, 50, 40, 70, 10];

// Added 80 to the end of the array
prices.push(80);

// Removed the first element of the array
prices.shift();

// Logged the array to the console
console.log(prices); 

// Task 2 Modifying Customer Orders Scenario
// Decleared array of orders
let orders = [10, 25, 15, 30, 20];
orders[2] += 5;
let total = orders.reduce((sum, order) => sum + order, 0);
console.log(total);


//Task 3 Employee Performance Tracking Scenario
// Decleared object of employee
let employee = {
    name: "Gavrie Grant",
    role: "Marketing Manager",
    performanceScore: 80,
    isActive: true
};
// Updated the performance score of the employee
employee.performanceScore = 95;

// Added a new property to the employee object
employee.promotionEligible = true;

console.log(employee);