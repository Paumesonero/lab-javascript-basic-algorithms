// Iteration 1: Names and Input

const hacker1 = 'Joe';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'vilma';

console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}




// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}



for (i = 0; i < hacker2.length; i++) {
    console.log(hacker2.split("").reverse().join(""));
}




if (hacker1.localeCompare(hacker2) < 0) {
    console.log("the driver's name goes first.")
}
else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?");
}