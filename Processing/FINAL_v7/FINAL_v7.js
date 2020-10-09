let pos = 0;
let mic;

let x;
let y;
let k;

let r = 25;

function preload(){
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    
    clouds = loadImage('data/blurred_clouds2.jpg');
    cloud = loadImage('data/cloud.png');
    rock = loadImage('data/rock.png');
    rock2 = loadImage('data/rock2.png');
    rock3 = loadImage('data/rock3.png');
    forrestB = loadImage('data/forrest_back.png');
    forrestF = loadImage('data/forrest_front.png');

    fulltext = loadImage('data/Full_Text.png');
}

  //x = x + 3;


function setup(){
  createCanvas(windowWidth,windowHeight);
 
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
   
 x = random(width);
 y = random(height);
 
 b = random(0,width/2);
 c = random(0,width/2);
 d = random(0,width/2);
 e = random(0,height/2);
 f = random(0,height/2);
 g = random(0,height/2);

 k = 0;
}

let value=255;

function draw(){
  background(20);
  //image (clouds, 0, pos/10, width*2, clouds.height*width/clouds.width*2);
    
  let vol = mic.getLevel()*40;
  let h = map(vol*10, 0, 1, 0, 75);

  image(fulltext, 0, k, width, fulltext.height*width/fulltext.width);
  k = k - h/800;
  
  image(rock,b+h, e+h, width/3, rock.height*width/rock.width/3);
  image(rock2,c-h, f+h/4, width/4, rock2.height*width/rock2.width/4);
  image(rock3,d-h, g-h, width/4, rock2.height*width/rock2.width/4);
  
  //noTint();
  //image(cloud,windowWidth/2+x/10,windowHeight/2,3480/4,1336/4);
  //image(cloud,windowWidth/8+x/10,windowHeight/2,3480/4,1336/4);

}

function mousePressed() {
  userStartAudio();
   if (value === 255) {
    value = 0;
  } else {
    value = 0;
  }
  
}
function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;

}
function keyPressed() {
  if (value === 255) {
    value = 0;
  } else {
    value = 0;
  }
}
