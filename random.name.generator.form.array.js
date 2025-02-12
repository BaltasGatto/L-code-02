const wilPay = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

const payingForTheLunch = Math.floor(Math.random() * wilPay.length);

const paying = wilPay[payingForTheLunch];

console.log(paying);

const billCalculator = function () {
  const payingForTheLunch = Math.floor(Math.random() * wilPay.length);
  return console.log(wilPay[payingForTheLunch]);
};
billCalculator();

function whosPaying(names) {
  const numerOfPeople = names.length;
  const randomPersonPosition = Math.floor(Math.random() * numerOfPeople);
  const randomPerson = names[randomPersonPosition];

  return randomPerson + `is goging to buy lunch!`;
}
