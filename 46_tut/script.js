alert("hello");

let a = setTimeout(function() {
    alert("I am inside settimeout")
}, 1000);

let b = confirm("Do you want to run the settimeout?")


if(b === false){
    clearTimeout(a);
}

console.log(a)