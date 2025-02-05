function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  let numberOfBottle = Math.floor(money / 1.5);
  console.log("buy" + numberOfBottle + "bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);

function phone(money) {
  const manyPhones = money * 2000;
  alert("I broth " + money + " phones for " + manyPhones + " $");
  console.log("im buying a phone");
}

phone(3);
