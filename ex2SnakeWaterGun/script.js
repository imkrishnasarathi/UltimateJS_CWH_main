const choices = ["s", "w", "g"];
const readyOrNot = confirm("Hello there! Are you ready for this game ?");

function Game(){
  let item = items[Math.floor(Math.random()*items.length)];
  let userChoice = prompt("Enter your choice (rock, paper or scissors) :");
}

if (readyOrNot){
  alert("Let's Go!");
  
}
else{
  alert("Okay. Maybe we'll play later ?");
}