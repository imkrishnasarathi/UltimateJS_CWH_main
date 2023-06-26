let runAgain = true;

const canDrive = (age) => {
  return age>=18?true:false;
}

while (runAgain){
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (canDrive(age)){
    alert("Yes you can drive")
  }
  else{
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}



