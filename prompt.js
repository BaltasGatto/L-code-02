/*
let message = prompt("Compose youre message:");
let messageCount = message.length;
alert(
  "You have written " +
    message +
    " charakters, you have left " +
    (140 - messageCount) +
    " charakters remaining."
);
*/
/*
let tweet = prompt(`Write youre massage`);
alert(
  "you have writen " +
    tweet.length +
    "charakters you have left " +
    (6 - tweet.length) +
    " charakters remaining."
);
*/
/*
//1 varijantas. 
alert(prompt(`Write youre message`).slice(0, 140));
// 2 varijantas. 
let tweet = promt ('compose youre message: ');
let tweetunder140 = tweet.slice(0,140);
alert (tweetunder140);
*/
/*
function getMilk(money) {
  return money % 1.5;
}

let change = getMilk(4);
*/
/*
let heigh = 1.8;
let weight = 65;

function bmiCalculator(a1, b2) {
  return b2 / (a1 * a1);
}
let bmi = Math.round(bmiCalculator(heigh, weight));
console.log(bmi);
*/
/*
let n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;

console.log(n);
*/
/*
let loveGenerator = prompt(
  " write youre and youres lover name to see love procentrage! "
);

let user1 = Math.random();
user1 = user1 * 99;
user1 = Math.floor(user1) + 1;

alert("Congratz youre love " + loveGenerator + " is " + user1 + " %");
*/

/*
prompt("What is youre name?");
prompt("what is they name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    "Youre love score is " +
      loveScore +
      "%" +
      " you love each other like true lovers"
  );
} else {
  alert("Youre love score is " + loveScore + "%");
}
*/
/*
function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));

  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  }

  if (bmi > 18.5 && bmi < 24.k9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
  }

  if (bmi > 24.9) {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}

console.log(bmiCalculator(77, 1.69));
*/

const output = [];
