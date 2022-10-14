let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
   console.log('Invalid season.');
}

    var bobsPoints = 0;
    var alicePoints = 0;
    for (var i =0; i < 3; i++){
        if (a[i] < b[i]) {
            bobsPoints = bobsPoints + 1; 
        } else if (a[i] > b[i]) {
            alicePoints = alicePoints + 1;
        }
    }
    return  [alicePoints, bobsPoints] 