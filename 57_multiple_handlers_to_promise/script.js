let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("Hey I am not resolved")
        resolve(1)
    }, 2000)
})

p1.then(() => {
    alert("hurray");
})
p1.then(()=>{
    console.log('Congratulations this promise is now resolved')
})
