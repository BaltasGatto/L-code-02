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
