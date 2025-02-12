const wilPay = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

const payingForTheLunch = Math.floor(Math.random() * wilPay.length);

const paying = wilPay[payingForTheLunch];

console.log(paying);

const billCalculator = function () {
  const payingForTheLunch = Math.floor(Math.random() * wilPay.length);
  return alert(wilPay[payingForTheLunch]);
};
billCalculator();
