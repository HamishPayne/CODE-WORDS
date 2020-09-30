//let mic;

function preload(){
    //utopia = loadStrings('data/utopia_text.txt');
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    //Laica = loadFont('data/Laica-Regular.otf');
    //Monument = loadFont('data/MonumentGroteskRegular.otf');
    Serifbabe = loadFont('data/Serifbabe.otf');
    
}

 function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  //cnv.mousePressed(userStartAudio);
  //mic = new p5.AudioIn();
  //mic.start();
  textAlign(CENTER);
  
}

function draw(){
  frameRate (30);
  background(20);
  
  //micLevel = mic.getLevel();
  //let y = height - micLevel * height*20;
  //let x = height - micLevel * height;
  
  //rectMode(RADIUS);
  //fill(20);
  //stroke(255);
  //rect (windowWidth/2,63,113,20);
  
  //noStroke(0);
  //textFont(Monument);
  //textSize(23);
  //fill(255);
  //text ('CLICK THEN SHOUT',windowWidth/2,70);
  
  translate(windowWidth/45,windowHeight/8);
  textFont (Serifbabe);
  textSize(40);
  //fill(y/5);
  fill(255);
  text (utopiaCAPS,0,0,windowWidth-60, windowHeight+100);
  
  filter(BLUR, mouseX/25);
  
}
