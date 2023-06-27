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
      count++;
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
      count++;
    }
    else if (userChoice.toLowerCase() === 'water'){
      if (computerChoice === 'snake'){
        alert("You Lost! Snake drinks water!");
        cScore++;
      }
      else if (computerChoice === 'gun'){
        alert("You Won! Water drowns Gun!");
        uScore++;
      }
      count++;
    }
    else if (userChoice.toLowerCase() === "gun"){
      if (computerChoice === "water"){
        alert("You Lost! Water drowns Gun!");
        cScore++;
      }
      else if (computerChoice === "snake"){
        alert("You Won! Gun shoots Snake!");
      }
      count++;
    }
    else{
      alert("Not a valid word. Maybe try again?");
      continue;
    }
  }
  
}

if (readyOrNot){
  alert("Let's Go!");
  Game();
  if (cScore > uScore){
    alert("The Winner is COMPUTER!");
  }
  else if (uScore > cScore){
    alert("Hooray! You are the winner!");
  }
  else if (uScore === cScore){
    alert("It's a draw")
  }
}
else{
  alert("Okay. Maybe we'll play later ?");
}