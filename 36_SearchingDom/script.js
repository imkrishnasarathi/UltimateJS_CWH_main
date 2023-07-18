// Change the card title to red
/* let ctitle = document.getElementsByClassName('card-title')[0];
   ctitle.style.color = "red" */

let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

let ctitles = document.querySelectorAll('.card-title')
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"

document.querySelector(".this").style.color = "cyan";