let bg;
let y = 0;
let pos = 0;

function preload(){
    //utopia = loadStrings('data/utopia_text.txt');
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    Monument = loadFont('data/MonumentGroteskTrial-Mono.otf');
    Serifbabe = loadFont('data/Serifbabe.otf');
    MGregular = loadFont('data/MGRegular.otf');
    Clouds = loadImage('data/blurred_clouds2.jpg');
    
    cloud = loadImage('data/cloud.png');
    rock = loadImage('data/rock.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
}

function draw(){
  background(255);
  image(Clouds,0,0,5120,2880);
  
  textAlign(CENTER);
  imageMode(CENTER);
  
  strokeWeight(1);
  stroke(0);

  
  //CENTER LINE
  //line(windowWidth/2,0,windowWidth/2,30);
  //RIGHT LINES
  //line(windowWidth/2+windowWidth/2,0,windowWidth/2+windowWidth/2,10);
  //line(windowWidth/2+windowWidth/10,0,windowWidth/2+windowWidth/10,30);

  //LEFT LINES

  
  //Utopia Text
  textFont (Serifbabe);
  textSize(windowWidth/20);
  fill(0);
  text (utopiaCAPS,0,pos,windowWidth-5, windowHeight*10);
  
  //Images
  translate(windowWidth/2,windowHeight/2);
  image(cloud,0,pos/2-50,3480/3,1336/3);
  image(rock,0,pos*4,1557/3,1139/3);

}
function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;

}
