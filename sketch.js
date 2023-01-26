let inputtext = 'this is a random quote by me pls use thank you uwu';
let typed = '';
let index = 0;
let jetbrainsmono;
let wrongchars = 0;

function preload() {
  jetbrainsmono = loadFont('assets/jetbrains.ttf');
}

function setup() {
  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(getRandomWords);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(16);
  textAlign(LEFT);
  textWrap(WORD);
  textFont(jetbrainsmono);
  let inputtextw = textWidth(inputtext)
  text(inputtext, width/2 - inputtextw/2, height/2 - 50);
  fill(66, 135, 245);
  text(typed, width/2 - inputtextw/2, height/2 - 50);
  fill(255);
  textAlign(CENTER);
  text('Wrong Characters typed: ' + wrongchars, width/2, height/2 - 100);
}

function keyPressed() {
  if (key == inputtext[index]) {
    typed += key;
    index += 1;
  } else if (keyCode == 8) {
    typed = typed.substring(0, typed.length - 1);
    index -= 1;
  } else {
    wrongchars += 1;
  }
}

function getRandomWords() {
  fetch('https://fakerjs-api.sherlockholmes.workers.dev/')
    .then(response => response.json())
    .then(data => {
      inputtext = data.ten;
      typed = '';
      wrongchars = 0;
      index = 0;
    })
    .catch((error) => console.error('Error:', error));
}