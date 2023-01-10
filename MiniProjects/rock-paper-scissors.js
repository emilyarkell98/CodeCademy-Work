const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput=== 'rock'|| userInput=== 'paper'|| userInput=== 'scissors') {
      return userInput
    } else {console.log('error with your input!')}
    };
    
    function getComputerChoice (){
       let random=Math.floor(Math.random() * 3);
      if (random ===0){return 'rock'} else if (random===1){return 'paper'}
      else if (random===2){return 'scissors'} else {return 'error'}
    };
    
    function determineWinner (userChoice, computerChoice){
      if (userChoice=== computerChoice){return 'the game was a tie'}
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {return 'computer won!!'} else {return 'user won'}
    };
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {return 'computer is the winner' } 
      else {return 'user winner!'}
    };
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){return 'computer is the win win winner'}
      else {return 'user is the win win winner'}
    }
    };
    
    function playGame (){
      let userChoice = getUserChoice( 'scissors')
      let computerChoice = getComputerChoice()
      console.log(userChoice, computerChoice);
      console.log(determineWinner(userChoice, computerChoice))
    };
    
    playGame()
    