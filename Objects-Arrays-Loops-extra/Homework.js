/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n-----------Ex.1 Answers-----------\n")

let arrayOfPositiveNumbers = ("1", "2", "3", "4","5")

console.log(arrayOfPositiveNumbers)


/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("\n-----------Ex.2 Answers-----------\n")

let someone = {
    name: "Some",
    surname: "One",
    email: "some@one.com",
    age: "25"
}

console.log("someone")


/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n-----------Ex.3 Answers-----------\n")

someone.hssDrivingLicense = "true"

console.log("someone")


/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\n-----------Ex.4 Answers-----------\n")

delete someone.age

console.log("someone")


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("\n-----------Ex.5 Answers-----------\n")

let someoneElse = {
    name: "John",
    surnam: "Doe",
    email: "john@doe.com"

}

console.log("someoneElse")

if (someone.email === some@one.com) {
    
} else {
    
}
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log("\n-----------Ex.6 Answers-----------\n")


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("\n-----------Ex.7 Answers-----------\n")


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("\n-----------Ex.8 Answers-----------\n")


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("\n-----------Ex.9 Answers-----------\n")


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log("\n-----------Ex.10 Answers-----------\n")


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("\n-----------Ex.11 Answers-----------\n")


/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("\n-----------Ex.12 Answers-----------\n")


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("\n-----------Ex.13 Answers-----------\n")


console.log("\n-----------!!END OF ANSWERS!!-----------\n")
