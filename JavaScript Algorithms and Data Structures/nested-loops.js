const bobsFollowers = ['Derek', 'Armin', 'Oscar', 'Fred'];
const tinasFollowers = ['Derek', 'Armin', 'Wendy'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < tinasFollowers.length; j++){
      if (bobsFollowers[i] === tinasFollowers[j]){
         mutualFollowers.push(bobsFollowers[i]);
      }
    }
};