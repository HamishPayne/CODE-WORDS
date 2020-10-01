/*
  sound examples
  microphone input
*/

/*
  the mic var will get the audio input
  the level will get amplitude from live audio
  to map to visual
*/
var mic;
var level;

function setup() {
  createCanvas(400, 400);
  
  /*
    audio in will prompt the browser
    asking user permission to record
    user has to give permission
    to start
  */
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  noFill();
  stroke(0);
  strokeWeight(5);
  
  /*
    get microphone amplitude
  */
  level = mic.getLevel();
  
  /*
    map level to the ellipse height
    s + 25 so it isn't 0 when microphone 
    doesn't detect sound
  */
  var s = map(level, 0, 0.5, 0, width);
  ellipse(200, 200, 100, s + 25);
}
