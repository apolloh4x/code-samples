const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();

groceryList.unshift('popcorn');

console.log(groceryList.slice(1, +4));
console.log(groceryList.slice());

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);