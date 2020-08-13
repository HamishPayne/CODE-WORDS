let x = 250;
let y = 250;
let a = 255;
let goLeft = false;

function setup() {
createCanvas (500,500);

}

function draw(){
  
 background (a,255,100);
 strokeWeight(5);
 fill(255,105,97);
 
 //OUTER ELLIPSE

  if (mouseIsPressed) {
    stroke(0);
    fill (a,255,100);
    strokeWeight (0);
  } else {
    stroke(40);
  }
 
 ellipse (x,y,300,300); //(centre x, centre y, width, height)
 if(goLeft==false){
     x= x+2;
     a = x-100;
 }
 if(goLeft==true){
     x = x-2;
     a = x-100;
     
 }
 if(x>345)
 {
   goLeft=true;
 }
 if(x<155)
 {
    goLeft=false;
 }
 
 //INNER ELLIPSE
 
  fill (a,255,100);
  ellipse (x,y,200,200); //(centre x, centre y, width, height)
 if(goLeft==false){
     x= x;
     a = x-100;
 }
 if(goLeft==true){
     x = x;
     a = x-100;
     
 }
 if(x>345)
 {
   goLeft=true;
 }
 if(x<155)
 {
    goLeft=false;
 }

//BOTTOM TEXT

noStroke();

textAlign(LEFT);

  if (mouseIsPressed) {
    fill(255,255,255);
  } else {
    fill(a,255,100);
  }
  
textSize(25);
text("CIRCLE",10,490);

textAlign(RIGHT);

  if (mouseIsPressed) {
    fill(255,255,255);
  } else {
    fill(a,255,100);
  }
  
textSize(25);
text("BOUNCE TEST 001",490,490);



}
