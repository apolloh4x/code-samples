// Weather forecast in Kelvin.
const kelvin = 0;
// Weather forecast in celsius.
const celsius = kelvin - 273;
// Weather forecast in fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Built-in Math object to round down decimal number of Fahrenheit.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert Celsius to Newton.
let newton = celsius * (33 / 100);
// Round down decimal number of Newton.
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

document.getElementById("fahrenheit").innerHTML = `The temperature is ${fahrenheit} degrees Fahrenheit.`;
document.getElementById("newton").innerHTML = `The temperature is ${newton} degrees Newton.`;