function isLeap(year) {
  // year%4==0

  // year%100!=0     year%100!=0 and year%400==0

  //Write your code here.

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("Leap year.");
      } else {
        console.log("Not leap year.");
      }
    } else {
      console.log("Leap year.");
    }
  } else {
    console.log("Not leap year.");
  }
}
