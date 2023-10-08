let prompt = require('prompt-sync')(); // Require the 'prompt-sync' to take user input//
let input = prompt ('Enter student\'s marks: '); //The user is asked to enter the student's marks
let enteredMarks = parseFloat(input); //parse the user input into a number and store in the variablr 'enterdMarks'

// The function 'grades' takes 'marks' as parameter and returns a grade
function grades (marks) {
  if (marks > 79 && marks < 100){ 
    return "A" //if marks are in the range of 80-89, return 'A'
  } else if (marks >= 60 && marks <= 79){ 
    return "B" // if the marks are in the range of 60-79, return 'B'
  } else if (marks >= 50 && marks <= 59){ 
    return "C" //if the marks are in the range of 50-59, return 'C'
  } else if (marks >= 40 && marks <= 49){ 
    return "D" // if marks inthe range 40-49, return 'D'
  } else if (40 > xmarks){ 
    return "E" // if marks are less than 40, return 'E'
  } else {
    return "Not a grade" // if none of the above are met return 'NOT A GRADE'
  }


}
// call the 'grades' function with 'enterdaMarks' as an argument and didplay the result
console.log("student's Grade: " + grades(enteredMarks));