const choices = ["s", "w", "g"];
const readyOrNot = confirm("Hello there! Are you ready for this game ?");
let cScore;
let uScore;

function Game(){
  let computerChoice = choices[Math.floor(Math.random()*choices.length)];
  let count = 0;
  while (count<6){
    let userChoice = prompt("Enter your choice (snake, water or gun) :");
    if (userChoice === computerChoice){
      alert("It's a draw!");
      uScore++;
      cScore++;
    }
    if (userChoice === 'snake' || userChoice === 'Snake'){
      if (computerChoice === 'w'){
        alert("You Won! Snake Drinks Water!")
      }
    } 
  }
  
}

if (readyOrNot){
  alert("Let's Go!");
  
}
else{
  alert("Okay. Maybe we'll play later ?");
}