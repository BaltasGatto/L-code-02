/*
let myAge = prompt(" Calculate how much you have left to live");
let daysPerYear = 365;
let monthPerYear = 12;
let weeksPerYear = 52;
const untilDie = 90;

function howManyDaysLeft(myAge) {
  const daysLeft = (untilDie - myAge) * daysPerYear;
  const weeksLeft = (untilDie - myAge) * weeksPerYear;
  const monthLeft = (untilDie - myAge) * monthPerYear;

  alert(
    "You have " +
      daysLeft +
      " days left, " +
      weeksLeft +
      " weeks and " +
      monthLeft +
      " month."
  );
}
howManyDaysLeft(myAge);
*/
function lifeInWeeks(age) {
  let yearsRemaining = 90 - age;
  let days = yearsRemaining * 365;
  let weeks = yearsRemaining * 52;
  let months = yearsRemaining * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}

lifeInWeeks(34);
