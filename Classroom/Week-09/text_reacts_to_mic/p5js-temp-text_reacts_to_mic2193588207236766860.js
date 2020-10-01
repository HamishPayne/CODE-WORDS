let mic;

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
  fill(30);
  stroke(255);
  rect (windowWidth/2,63,130,20);
  
  noStroke(0);
  textFont(Monument);
  textSize(21);
  fill(255);
  text ('CLICK THEN SHOUT',windowWidth/2,70);
  
  
  textFont (Serifbabe);
  textSize(50);
  fill(y/5);
  translate(windowWidth/45,windowHeight/6);
  text (utopiaCAPS,0,0,windowWidth-60, windowHeight+100);
  
  
  
  //translate (width/2,height/2);
  //fill(0,0,255,150);
  //ellipse(1,1,500,500);
}
