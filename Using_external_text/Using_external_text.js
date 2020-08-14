let s = 'MSDF is an annual festival spanning over a long weekend in June. The event aims to open up the world of design to students in the city of Melbourne. Through workshops, lectures, artist markets, student exhibitions and keynote speakers the festival aims to guide current design students entering the industry as well as spark interest in young people who may be interested in getting involved in design.'
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
