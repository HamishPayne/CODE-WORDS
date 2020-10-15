let pos = 0;
let mic;

let x;
let y;
let k;
let r = 25;
let v;

function preload(){
    
    Monument = loadFont('data/MGRegular.otf');
    
    rock = loadImage('data/rock.png');
    rock2 = loadImage('data/rock2.png');
    rock3 = loadImage('data/rock3.png');
    
    bush3 = loadImage('data/bush3.png');
    bush4 = loadImage('data/bush4.png');
    bottom_bush = loadImage('data/bottom_bush.png');
    
    blur_bg = loadImage('data/blur_bg2.jpg');
    frame = loadImage('data/frame.png');
    
    fulltext = loadImage('data/Full_Text2.png');
}

class Particle {
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,3);
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-1,1);
  }
  createParticle() {
    noStroke();
    fill(255,255,255,100);
    circle(this.x,this.y,this.r);
  }
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {

      }
    });
  }
}

let particles = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
  
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
   
  x = random(width);
  y = random(height);
 
  b = random(0,width);
  c = random(0,width);
  d = random(0,width);
  e = random(0,height);
  f = random(0,height);
  g = random(0,height);

  k = 0;
}

let value=240;
let tran=0;

function draw(){
  background(250);
  
  image(blur_bg, 0, 0, windowWidth, windowHeight);
  
  strokeWeight(1);
  stroke(255);
    
  let vol = mic.getLevel()*40;
  let h = map(vol*5, 0, 1, 0, 75);
  
    for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  
  p = (fulltext.height*width/fulltext.width/2);
  k = k - h/1500;
  image(fulltext, windowWidth-p, k+windowHeight/2, width/2, p);
 
  image(frame, 0, 0, windowWidth, windowHeight);
  
  strokeWeight(0);
  fill (250,250,250, tran);
  rect(0,0, windowWidth, windowHeight);
  
  image(rock,b+h, e+h, width/5, rock.height*width/rock.width/5);
  image(rock2,c-h, f+h/4, width/6, rock2.height*width/rock2.width/6);
  image(rock3,d-h, g-h, width/6, rock3.height*width/rock3.width/6);
  
  m = bush3.height*width/bush3.width/2
  n = bush4.height*width/bush4.width/2
  o = bottom_bush.height*width/bottom_bush.width
  
  image(bottom_bush,0,windowHeight-o+h, width, o);
  image(bush3,windowWidth-m,0-h/4, width/2, m);
  image(bush4,0,0-h, width/2, n);
  
  fill (250,value);
  rect (0,0,windowWidth,windowHeight);
  
  textAlign(CENTER);
  textFont (Monument);
  strokeWeight(0);
  textSize(windowWidth/40);
  fill (10,10,10,value);
  text ('Click to begin your transition into a digital utopia.\nMake noise to scroll the text.\nBe warned, physical interaction is not advised.',windowWidth/2,windowHeight/2);
  
}

function mousePressed() {
  userStartAudio();
   if (value === 240) {
    value = 0;
  } else {
    value = 0;
  }
}
function keyPressed() {
  if (tran === 0) {
    tran = 255;
  } else {
    tran = 255;
  }
}
