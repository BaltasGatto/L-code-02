// ARRAY
//  .length nusakys kiek itemu yra arejuje
// .includes( ) funkcija kuri gali padeti surasti ieskoma itema
/*
let guestList = ["Arvydas", "Jovita", "Algis", "Saule", "Indre"];

let gestListNames = prompt("What is youre name?");

if (guestList.includes(gestListNames)) {
  alert("you are on the list");
} else {
  alert("you are not on the list");
}
*/
//listas kuris tikrina kas yra arejuje su funkcija .includes
let output = [];
let count = 1;

function fizzbuzz() {
  output.push(count);
  count = count + 1;
  console.log(output);
}
