let inputtext = 'click New Text to get new text';
let typed = '';
let index = 0;
let jetbrainsmono;
let wrongchars = 0;
let caps = false;
let timerrunning = false;
let wordlength = 10;
let startmillis;
let endmillis;
let secstaken = 0;
let inputtextlength = 30;
let wrongcharsratio;
let wpm;

function preload() {
  jetbrainsmono = loadFont('assets/jetbrains.ttf');
}

function setup() {
  newtextbutton = createButton('New Text');
  newtextbutton.position(windowWidth - 231, 19);
  newtextbutton.mousePressed(getRandomWords);
  newtextbutton.addClass('button-big');
  githubbutton = createButton('Source Code');
  githubbutton.position(windowWidth - 104, windowHeight - 30);
  githubbutton.mousePressed(getsrc);
  githubbutton.addClass('button-options');
  capsbutton = createButton('Toggle Capital Letters');
  capsbutton.position(windowWidth - 419, 45);
  capsbutton.mousePressed(toggleCaps);
  capsbutton.addClass('button-options');
  word10button = createButton('10');
  word10button.position(windowWidth - 419, 20);
  word10button.mousePressed(wordlength10);
  word10button.addClass('button-options');
  word20button = createButton('20');
  word20button.position(windowWidth - 391, 20);
  word20button.mousePressed(wordlength20);
  word20button.addClass('button-options');
  word30button = createButton('30');
  word30button.position(windowWidth - 363, 20);
  word30button.mousePressed(wordlength30);
  word30button.addClass('button-options');
  word50button = createButton('50');
  word50button.position(windowWidth - 335, 20);
  word50button.mousePressed(wordlength50);
  word50button.addClass('button-options');
  word100button = createButton('100');
  word100button.position(windowWidth - 307, 20);
  word100button.mousePressed(wordlength100);
  word100button.addClass('button-options');
  word200button = createButton('200');
  word200button.position(windowWidth - 269, 20);
  word200button.mousePressed(wordlength200);
  word200button.addClass('button-options');
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(16);
  textAlign(LEFT);
  textWrap(WORD);
  strokeWeight(0);
  stroke(255);
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
  text('Wrong Characters Typed: ' + wrongchars + '/' + inputtextlength + ' ' + wrongcharsratio + '%', width/2, height/2 - 200,);
  text('Time: ' + secstaken, width/2, height/2 - 160);
  if (typeof wpm !== 'undefined') {
    text('WPM: ' + wpm, width/2, height/2);
  }
  textAlign(LEFT);
  fill(0);
  strokeWeight(2);
  stroke(66, 135, 245);
  rect(98, 20, width - 198, 50);
  strokeWeight(0);
  fill(66, 135, 245);
  textSize(24);
  text('p5Type', 110, 50);

  if (timerrunning) {
    endmillis = millis();
    secstaken = (endmillis - startmillis) / 1000;
  }

  wrongcharsratio = Math.round(wrongchars / inputtextlength * 100);
}

function keyPressed() {
  if (key == inputtext[index]) {
    if (!timerrunning) {
      startmillis = millis();
      timerrunning = true;
    }
    typed += key;
    index += 1;
    if (typed == inputtext) {
      timerrunning = false;
      inputtext = '';
      endmillis = millis();
      typed = '';
      secstaken = (endmillis - startmillis) / 1000;
      wpm = wordlength / (secstaken / 60);
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
  if (wordlength == 10) {
    axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/10'}).then(function (response) {
    if (caps == true) {
      inputtext = response.data;
    } else {
      inputtext = response.data.toLowerCase();
    }
    inputtextlength = inputtext.length;
    typed = '';
    index = 0;
    wrongchars = 0;
    timerrunning = false;
    startmillis = 0;
    endmillis = 0;
    wpm = undefined;
    secstaken = 0;
    wrongcharsratio = 0;
  }).catch(function (error) {
    console.error(error);
  });
  } else if (wordlength == 20) {
    axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/20'}).then(function (response) {
    if (caps == true) {
      inputtext = response.data;
    } else {
      inputtext = response.data.toLowerCase();
    }
    inputtextlength = inputtext.length;
    typed = '';
    index = 0;
    wrongchars = 0;
    timerrunning = false;
    startmillis = 0;
    endmillis = 0;
    wpm = undefined;
    secstaken = 0;
    wrongcharsratio = 0;
  }).catch(function (error) {
    console.error(error);
  });
  } else if (wordlength == 30) {
    axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/30'}).then(function (response) {
    if (caps == true) {
      inputtext = response.data;
    } else {
      inputtext = response.data.toLowerCase();
    }
    inputtextlength = inputtext.length;
    typed = '';
    index = 0;
    wrongchars = 0;
    timerrunning = false;
    startmillis = 0;
    endmillis = 0;
    wpm = undefined;
    secstaken = 0;
    wrongcharsratio = 0;
  }).catch(function (error) {
    console.error(error);
  });
  } else if (wordlength == 50) {
    axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/50'}).then(function (response) {
    if (caps == true) {
      inputtext = response.data;
    } else {
      inputtext = response.data.toLowerCase();
    }
    inputtextlength = inputtext.length;
    typed = '';
    index = 0;
    wrongchars = 0;
    timerrunning = false;
    startmillis = 0;
    endmillis = 0;
    wpm = undefined;
    secstaken = 0;
    wrongcharsratio = 0;
  }).catch(function (error) {
    console.error(error);
  });
  } else if (wordlength == 100) {
    axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/100'}).then(function (response) {
    if (caps == true) {
      inputtext = response.data;
    } else {
      inputtext = response.data.toLowerCase();
    }
    inputtextlength = inputtext.length;
    typed = '';
    index = 0;
    wrongchars = 0;
    timerrunning = false;
    startmillis = 0;
    endmillis = 0;
    wpm = undefined;
    secstaken = 0;
    wrongcharsratio = 0;
  }).catch(function (error) {
    console.error(error);
  });
  } else if (wordlength == 200) {
    axios.request({method: 'GET', url: 'https://fakerjs-api.sherlockholmese.repl.co/words/200'}).then(function (response) {
    if (caps == true) {
      inputtext = response.data;
    } else {
      inputtext = response.data.toLowerCase();
    }
    inputtextlength = inputtext.length;
    typed = '';
    index = 0;
    wrongchars = 0;
    timerrunning = false;
    startmillis = 0;
    endmillis = 0;
    wpm = undefined;
    secstaken = 0;
    wrongcharsratio = 0;
  }).catch(function (error) {
    console.error(error);
  });
  }
}

function toggleCaps() {
  caps = !caps;
}

function getsrc() {
  window.open('https://github.com/sherlockholmestech/p5type');
}
//redundant bullshit cuz p5js hates me

function wordlength10() {
  wordlength = 10
}

function wordlength20() {
  wordlength = 20
}

function wordlength30() {
  wordlength = 30
}

function wordlength50() {
  wordlength = 50
}

function wordlength100() {
  wordlength = 100
}

function wordlength200() {
  wordlength = 200
}