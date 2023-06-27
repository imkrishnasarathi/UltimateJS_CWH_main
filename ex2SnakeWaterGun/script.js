const choices = ["snake", "water", "gun"];
const readyOrNot = confirm("Hello there! Are you ready for this game ?");
let cScore;
let uScore;

function Game(){
  let count = 0;
  while (count<6){
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    let userChoice = prompt("Enter your choice (snake, water or gun) :");
    if (userChoice.toLowerCase() === computerChoice){
      alert("It's a draw!");
      uScore++;
      cScore++;
    }
    if (userChoice.toLowerCase() === 'snake'{
      if (computerChoice === 'water'){
        alert("You Won! Snake Drinks Water!");
        uScore++;
      }
      else if (computerChoice === 'gun'){
        alert("You Lost! Gun shoots Snake!");
        cScore++;
      }
    }
    else if (userChoice.toLowerCase() === 'water'){
      if (computerChoice === 'snake'){
        alert("You Lost! Snake drinks water!");
      }
      else if (computerChoice === 'gun'){
        alert("You Won! Water drowns Gun!")
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