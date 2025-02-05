/*
let heigh = 1.8;
let weight = 65;

function bmiCalculator(a1, b2) {
  return b2 / (a1 * a1);
}
let bmi = Math.round(bmiCalculator(heigh, weight));
console.log(bmi);
*/

function bmiCalculator(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
