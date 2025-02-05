// 1 create a let that stores the name that user enters via promt
let name = prompt("What is youre name ?");

// 2 Captitalise the first letter of their name.
// a isolate the first char
let firstChar = name.slice(0, 1);

// b Turn the first char to upper case
let upperCaseFirstChar = firstChar.toUpperCase();

// c Isolate the rest of the name

let restOfName = name.slice(1, name.length); //vardas ir lenght kad ir koks butu vardas nenutruks

// d change the rest of the name with lower case
let restOfName2 = restOfName.toLowerCase(); //Mzosios raides

// e concactenate the first char with the rest of the char

let capitalisedName = upperCaseFirstChar + restOfName2;
// 3 we us the capitalised vesrsion of their name to greet them in alert

alert("Hello " + capitalisedName);
