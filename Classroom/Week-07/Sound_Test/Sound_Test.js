var drum;
var analyzer;

function setup() {
drum = loadSound ('data/drum.mp3'); //associate my sound with the varaible 'drum'
createCanvas (windowWidth, windowHeight); //Create full window canvas
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(drum);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(0, 10);
  fill(120);
  var volume = analyzer.getLevel();
  volume*=400;
  ellipse(width/2,height/2,volume,volume);
  fill(255);
  textSize(volume*2);
  
}

function mousePressed() {
  if (drum.isPlaying()) {
    background(255);
    drum.stop(); // if the song is playing, stop it
    drum.noLoop();
  }
  else {
    background(0);
    drum .loop();
    drum.play();  
    
  }
}
