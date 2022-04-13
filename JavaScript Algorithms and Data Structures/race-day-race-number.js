let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = false;
const age = 18;
if (age > 18 && earlyRegistration) {
  raceNumber += 1000;
}
if (age > 18 && earlyRegistration) {
  console.log(`${raceNumber} your race starts at 9:30am`);
} else if (age > 18 && !earlyRegistration) {
  console.log('Late adults run at 11:00am')
} else if ( age < 18 ) {
  console.log('Youth registrants run at 12:30pm (regardless of registration)');
} else {
  console.log('Runners who are 18 years old see registration desk')
}