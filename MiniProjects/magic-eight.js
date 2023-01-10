let userName = '';
userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');
let userQuestion = 'Is january going to be a good month for me?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 3);
let eightBall = '';
switch (randomNumber){
  case 0: 
  eightBall ='It is certain';
    break;
  case 1:
  eightBall = 'It is decidedly so';
    break;
  case 2:
  eightBall = 'Reply hazy try again';
    break;

}
console.log(eightBall)