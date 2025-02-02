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


//Task 4 Customer Feedback Records Scenario
// Decleared array of feedback
let feedback = [
    {
        customerName: "Allana Grant",
        feedbackText: "Great service",
        rating: 5
    },
    {
        customerName: "Gemma Grant",
        feedbackText: "Fast delivery",
        rating: 4
    },
    {
        customerName: "Chaz Marie",
        feedbackText: "Good product",
        rating: 4
    }
];

// Added a new feedback to the array
feedback.push({
    customerName: "Wayne Rooney",
    feedbackText: "Excellent quality",
    rating: 5
});

console.log(feedback);