# Week 07

## MAJOR PROJECT

### Paper Prototypes Presentation
We started off the session this week by putting the chosen section of our text into [google doc](https://docs.google.com/spreadsheets/d/1rqOlmfpCzXC9kA_vBeLOcTpdxCvWeo4zsiNa4uiDHTY/edit#gid=0). Then, in small groups, we presented our paper prototypes we had made during the week for our projects. It was really good to hear Celia and Win's ideas for their projects and see their paper prototypes. Showing them mine and speaking them through my idea helped me to get a better understanding of what I actually wanted to do, they also gave me some really helpful feedback. Win also introduced me to Whispering Galleries and Phase which he thought sounded similar to what I wanted to do with my project.

[Whispering Galleries](https://www.whisperinggalleries.com/)   
"Whispering Galleries is an interactive artwork developed specifically for the city of New Haven by Brad Bouse and Amaranth Borsuk, the creators of Between Page and Screen, a book of augmented reality poems."\
The design of Whiespering Galleries is very similar to what I want to do with my project, using type/transparency and audio input to effect text on the screen. I will try and do some further research into this project to see if i can find some motion visuals of it in action. The project explore themes of the intersection of phsycial and digital which is exactly what i'm looking at doing.

[Phase](https://www.eliashanzer.com/phase/)  
Win also showed my Phase font by [Elias Hanzer](https://www.eliashanzer.com/) which I have actually played around with before, but he reminded me that it has an audio input option which lets you play with the paramaters of the font through the audio input on the computer which is an idea i'm interesting in using for my project, I'm going to see if I can inspect the code that the site uses to figure out how it's done. Thanks Win!

### Show + Tell
After we shared our paper prototypes in our group we uploaded them to a [google doc](https://docs.google.com/presentation/d/1dX_ZDAdoo_U-JSXTtUxhwClVBWJZjEu7X48fx6t4-Zc/edit#slide=id.g980079f83c_10_10) and also came up with a short piece of pseudo code to describe what we wanted to happen in the sketch to share with the class. As always it was really nice to see what everyone had produced, I really enjoy these show and tell sessions because we don't get the chance to see each others work as we're not in the physical classroom. It was really interesting to see the different approaches people took with their paper prototypes, like Andy and Karen had spoken about it makes it much easier to picture someones project compared to them just speaking/writing about it.

```
START

SCREEN = fillCanvas with colour(255) 100% opacity
TEXT = Broken into words randomly placed across screen

INPUT mic
	Mic volume (up) = SCREEN opacity % lowers
	Mic volume (down) = SCREEN opacity % rises

TEXT displayed with words broken up at random
	Mic volume (up) = text reforming together
	Into paragraph
	Mic volume (down) = text breaking up into
	Seperate words
``` 


## PROCESSING
In the afternoon Karen showed us a few different resources for p5js and showed us some cool examples of using sprites (a,b), I remember using sprites when making games using [Game Maker](https://www.yoyogames.com/gamemaker) when i was in grade 2/3.

[p5js libraries](https://p5js.org/libraries/)\
*An overview of p5js libraries*\
[p5.play](http://molleindustria.github.io/p5.play/)\
*A p5js library used for creating games 'playthings'*\

   a  |  b 
:-------------------------:|:-------------------------:
![](sprite_1.gif)       |  ![](sprite_2.gif) 

We also looked at adding in sound using the p5.js sound library. We made fairly simple sketches which would play a sound when you clicked the mouse.
This was really helpful to learn because I am planning on using some sort of audio input/output for my main project.

See the sketch [HERE](https://hamishpayne.github.io/CODE-WORDS/Classroom/Week-07/Sound_Test/)

## RMIT CUTS
Karen told us about the staff cuts that are currently happening at RMIT which I had no idea about, she used psuedocode to express her feelings toward the situation. 
This made me think about what protests might look like in a totally digital world. I think that the power of protesting comes from the congregation of physical bodies and without that it loses it's impact. In the future it may become the removal from a digital system that is the act of protesting, gathering in an online location doesn't have the same visability and impact as it does in a physical world.

*View the RMIT Students Against Uni Cuts Facebook page [HERE](https://www.facebook.com/rmitstudentsagainstunicuts/)*


```
Karen's Code
#include <australianUniversities.h>
#include <HEstaff.h>
#include <NTEU.h>
#include <students.h> 

void fightTheCuts() {
  while (cuts > 0) {
    resist ();
    print (“Fight The Cuts!”);
    protest++; 
    discuss();
  }
  print (“university belongs to all Australians”);
} 
``` 
(Taken from [Bridie Toole's Github](https://github.com/bridieotoole/codewords/blob/master/week_07/readme.md))


## INSPIRATION
Andy shared with us a [collection](https://github.com/HamishPayne/codewords-3/tree/master/Case_studies) of different portfolio's and websites that had interesting coding, [one of the websites](http://matterofsorts.com/) created by a type designer from Melbourne featured a blur effect on the work which became clear once you hovered over it with the mouse. I'm wanting to do something quite similar to this for my project so I plan on inspecting the code to see how they've achieved this.

![](BlurGif.gif)

[PREV](https://hamishpayne.github.io/CODE-WORDS/Classroom/Week-06/).[NEXT](https://hamishpayne.github.io/CODE-WORDS/Classroom/Week-08/).[HOME](https://hamishpayne.github.io/CODE-WORDS/)
