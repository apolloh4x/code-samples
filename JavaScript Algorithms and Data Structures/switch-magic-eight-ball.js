let userName = "Apollo";
userName ? console.log(`Hello, ${userName}`) :console.log('Hello!');
const userQuestion ="Will I be rich?";
console.log(`${userName} : ${userQuestion}`);
const randomNumber = Math.floor(Math.random()*8);
let eightBall = "";
switch(randomNumber){
  case 0:
    console.log('Magic Eight Ball’s answer: It is certain');
    break;
  case 1:
    console.log('Magic Eight Ball’s answer: It is decidedly so');
    break;
  case 2:
    console.log('Magic Eight Ball’s answer: Reply hazy try again');
    break;
  case 3:
    console.log('Magic Eight Ball’s answer: Cannot predict now');
    break;
  case 4:
    console.log('Magic Eight Ball’s answer: Do not count on it');
    break;
  case 5:
    console.log('Magic Eight Ball’s answer: My sources say no');
    break;
  case 6:
    console.log('Magic Eight Ball’s answer: Outlook not so good');
    break;
  case 7:
    console.log('Magic Eight Ball’s answer: Signs point to yes');
    break;

}
