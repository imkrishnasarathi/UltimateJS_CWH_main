const jokeDiv = document.querySelector('#joke');

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why don't seagulls fly over the bay? Because then they would be bagels!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did one wall say to the other wall? 'I'll meet you at the corner!'",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you organize a space party? You 'planet'!",
  "What kind of tree fits in your hand? A palm tree!",
  "What did one ocean say to the other ocean? Nothing, they just waved!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "Why don't skeletons fight? They don't have the guts!",
  "What do you call a fish that wears a crown? King mackerel!",
  "Why did the bicycle fall over? It was two-tired!",
  "What do you call a sleeping bull? A bulldozer!",
  "What did the bee say to the flower? 'Hi, honey!'",
  "What kind of shoes do all spies wear? Sneakers!",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fly without wings? A walk!",
  "What's a tornado's favorite game to play? Twister!",
  "How do you make a lemon drop? Just let it fall!",
  "Why don't ants ever get sick? Because they have little anty-bodies!",
  "What do you call a dinosaur that's sleeping? A dino-snore!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "How do you catch a squirrel? Climb a tree and act like a nut!",
  "What did one hat say to the other hat? 'You stay here, I'll go on ahead!'",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "What do you get if you cross a dog and a calculator? A friend you can count on!",
  "Why did the computer go to the doctor? It had a virus!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one wall say to the other wall? 'I'll meet you at the corner!'",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "What kind of tree fits in your hand? A palm tree!",
  "What did one ocean say to the other ocean? Nothing, they just waved!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "Why don't skeletons fight? They don't have the guts!",
  "What do you call a fish that wears a crown? King mackerel!",
  "Why did the bicycle fall over? It was two-tired!",
];

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  jokeDiv.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(jokeDiv)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', (e) => {
    appendAlert(`${jokes[(Math.floor(Math.random() * jokes.length))]}`, 'dark')
    e.target.disabled = true;
    document.querySelector('.container').innerHTML += '<div class="alert alert-info" role="alert">Reload the page again to get a new joke</div>'
  })
}