
let prompt = require('prompt-sync')();
let speed = prompt('what is the speed\n'); //Enter the driver's speed when prompted.
const limit = 70;

//The code will output either "Ok" if the speed limit is within legal bounds or a certain number of points for each 5km/s above the speed limit
function checkSpeed() {
  if (speed < limit) {
    return 'OK';
  } else {
    let points = Math.floor((speed - limit) / 5);
    if (points > 12) {
      return 'License suspended'; //License suspended" will be given if you reach the limit of points.

    } else {
      return `points: ${points}`;
    }
  }
}
console.log(checkSpeed());

