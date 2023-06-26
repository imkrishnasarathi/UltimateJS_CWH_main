let age = prompt("Enter your age");
age = Number.parseInt(age);
let runAgain = true;

while (runAgain){
  const canDrive = (age) => {
    return age>=18?true:false;
  }
  
  if (canDrive(age)){
    alert("Yes you can drive")
  }
  else{
    alert("You cannot drive")
  }
}



