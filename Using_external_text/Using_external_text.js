function preload() {
  laica = loadFont('data/Laica-Regular.otf');
  essay = loadStrings('data/new_media_politics.txt');
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  background (245);
  textAlign (LEFT);
    
}

function draw() {

  fill (20);
  noStroke (0);
  textFont (laica);
  textSize (30);
  text (essay, 30, 20,windowWidth-60, windowHeight);
  
  
  
}
