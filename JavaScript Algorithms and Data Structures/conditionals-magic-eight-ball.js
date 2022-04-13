let userName = "Apollo";
userName ? console.log(`Hello, ${userName}`) :console.log('Hello!');
const userQuestion ="Will I be rich?";
console.log(`${userName} : ${userQuestion}`);
const randomNumber = Math.floor(Math.random()*8);
let eightBall = "";
if(randomNumber === 0){
    console.log('Magic Eight Ball’s answer: It is certain');
} else if (randomNumber === 1){
    console.log('Magic Eight Ball’s answer: It is decidedly so');
} else if (randomNumber === 2){
    console.log('Magic Eight Ball’s answer: Reply hazy try again');
} else if (randomNumber === 3){
     console.log('Magic Eight Ball’s answer: Cannot predict now');
} else if (randomNumber === 4){
    console.log('Magic Eight Ball’s answer: Do not count on it');
} else if (randomNumber === 5){
    console.log('Magic Eight Ball’s answer: My sources say no');
} else if (randomNumber === 6){
    console.log('Magic Eight Ball’s answer: Outlook not so good');
} else if (randomNumber === 7){
    console.log('Magic Eight Ball’s answer: Signs point to yes');
}