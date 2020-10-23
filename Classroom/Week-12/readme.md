# WEEK 12

## CLASSROOM
In class this week we all worked on filling out the submission form which had information for the website including our written statement. We also produced GIF's of our work for the website which was a lot harder than I thought it would be... Keeping them under 1MB was not easy. We also briefly presented our work to the class, it was awesome to see everyone's finished sketches and hear them speak about their process and final product.

While we were presenting our work Karen (incredibely quickly) worked on finishing the website which was live by the end of the class.

## MAJOR PROJECT
This week I worked in finalising my sketch before our final class. I added in the background imagery and tweaked the movement of the objects to ensure the text scrolled at a good speed for reading. I added a particle class which created small floating dots to the background to further communicate the idea of it being a digital utopia, I feel that they give a sense of endless space and a dreamlike look and feel. I used a pixelated gradient for the background to further communicate the sense of a digital space in contrast to the natural objects in the foreground.

``` // 
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
``` 

I also added some code which drew the rocks and different positions on the screen each time the sketch was opened by assigning a random value to a letter which I used for the X and Y positioning of the rock images.
``` // 
b = random(0,width);
e = random(0,height);

image(rock,b+h, e+h, width/5, rock.height*width/rock.width/5);
``` 


Final website with our projects
http://digbeyond.com/codeWords/list.php

## REFLECTION

## MINECRAFT
- Show what I've built in Minecraft this sem lol

[PREV](https://github.com/HamishPayne/CODE-WORDS/edit/master/Classroom/Week-11).[NEXT](https://github.com/HamishPayne/CODE-WORDS/edit/master/Classroom/Week-13)
