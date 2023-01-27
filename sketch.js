let inputtext = 'this is a random quote by me pls use thank you uwu';
let typed = '';
let index = 0;
let jetbrainsmono;
let wrongchars = 0;
let currentword = '';

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
  if (inputtextw > width - 200) {
    inputtextw = width - 100;
  }
  text(inputtext, width/2 - inputtextw/2, height/2 - 50, width - 100, height - (height/2 - 50));
  fill(66, 135, 245);
  text(typed, width/2 - inputtextw/2, height/2 - 50, width - 100, height - (height/2 - 50));
  fill(255);
  textAlign(CENTER);
  text('Wrong Characters Typed: ' + wrongchars, width/2, height/2 - 200,);
  text('Current Word:' + currentword, width/2, height/2 - 160);
}

function keyPressed() {
  if (key == inputtext[index]) {
    typed += key;
    index += 1;
    if (key == ' ') {
      currentword = '';
    } else {
      currentword += key;
    }
  } else if (keyCode == 8) {
    typed = typed.substring(0, typed.length - 1);
    currentword = currentword.substring(0, typed.length - 1);
    index -= 1;
  } else {
    wrongchars += 1;
  }
}

function getRandomWords() {
  axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/100'}).then(function (response) {
    inputtext = response.data;
    typed = '';
    index = 0;
    wrongchars = 0;
  }).catch(function (error) {
    console.error(error);
  });
}