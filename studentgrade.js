let prompt = require('prompt-sync')();  // required to take user input //
let input = prompt ('Enter student\'s marks: '); 
let enteredMarks = parseFloat(input); //parse the user input into a number and store in the variable 'enterdMarks'

// The function 'grades' takes 'marks' as parameter and returns a grade
function grades (x) {
  if (x > 79 && x < 100){ 
    return "A" //if marks are in the range of 80-89, return 'A'
  } else if (x >= 60 && x <= 79){ 
    return "B" // if the marks are in the range of 60-79, return 'B'
  } else if (x >= 50 && x <= 59){ 
    return "C" //if the marks are in the range of 50-59, return 'C'
  } else if (x >= 40 && x <= 49){ 
    return "D" // if marks inthe range 40-49, return 'D'
  } else if (40 > x){ 
    return "E" // if marks are less than 40, return 'E'
  } else {
    return "Nothing" // if none of the above are met return 'NOTHING'
  }


}
// call the 'grades' function and display the result //
console.log("student's Grade: " + grades(enteredMarks));