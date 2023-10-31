
let prompt = require('prompt-sync')();// Importing the prompt-sync module to take user input

const speed = parseFloat(prompt("Enter the speed of the car (in km/h): "));// Prompt the user to enter the speed of the car

// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70; // Define the speed limit
    let demeritPoints = 0; // Initialize demerit points variable

    if (speed <= speedLimit) {
        console.log("Ok"); // If speed is within limit, print "Ok"
    } else {
        // Calculate demerit points for exceeding the limit
        demeritPoints = Math.floor((speed - speedLimit) / 5);

        if (demeritPoints > 12) {
            console.log("License suspended"); // If points exceed 12, return "License suspended"
        } else {
            console.log("Points:", demeritPoints); // Otherwise, return the calculated points
        }
    }
}

// Call the function with the user-provided speed
calculateDemeritPoints(speed);