let mic;
let pos = 25;

function preload(){
    utopia = loadStrings('data/utopia_text.txt');
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    laica = loadFont('data/Laica-Regular.otf');
    Monument = loadFont('data/MonumentGroteskTrial-Mono.otf');
    Serifbabe = loadFont('data/Serifbabe.otf');
    
}

 function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
}

function draw(){
  frameRate (30);
  background(20);
  
  micLevel = mic.getLevel();
  //translate (windowWidth/2,windowHeight/2);
  let y = height - micLevel * height*5;
  
  rectMode(RADIUS);
  fill(20);
  stroke(255);
  rect (windowWidth/2,63,125,20);
  
  noStroke(0);
  textFont(Monument);
  textSize(21);
  fill(255);
  text ('CLICK THEN SHOUT',windowWidth/2,70);
  
  
  textFont (Serifbabe);
  textSize(50);
  fill(y/6);
  translate(windowWidth/45,windowHeight/6);
  text (utopiaCAPS,0,pos,windowWidth-40, height*10);

}
function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;
}
