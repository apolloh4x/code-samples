onst myAge= 34;
// Variable equal to my age as a number.
let earlyYears= 2;
// The first two years of a dog’s life count as 10.5 dog years each
earlyYears *= 10.5;
let laterYears= myAge - 2;
// Minus first two years already accounted for.
laterYears *= 4;
// Number of dog years accounted for later years.
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears= earlyYears + laterYears;
//My age in dog years
const myName= 'Jessica'.toLowerCase();
console.log(`My name is ${myName} I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//My name printed in lowercase and used of string interpolation.