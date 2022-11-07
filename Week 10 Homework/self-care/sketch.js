  var eye1x = 128;
  var eye1y = 100;
  var eye1direction = 4;
  
  var eye2x = 250;
  var eye2y = 100;
  var eye2direction = -6;
  
  var iris1x = 128;
  var iris1y = 100;
  var iris1direction = 10;
  
  var iris2x = 250;
  var iris2y = 100;
  var iris2direction = -15;
      
  var chinx = 188;
  var chiny = 328;
  var chinDirection = 1;
  
  var sizeName = 22;
  var count = 0;
  var sizeDirection = 2;
  
  var movement = 20;

function setup() {
  createCanvas(500, 600);
   movement = floor(random() * 10) + 1;
    frameRate(10);
  //background(240);
}

function draw() {

//settings
  background(20, 66, 88);
    fill(255, 60, 100);
    text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

      stroke(0);
      noFill()
  
  //title
    textSize(22)
    text("Self-Care", 10,80)  
  
    // face shape
    rect(70,20,250,350)
  
  //eyebrows
    line(100,80,160,80)
    line(220,80,280,80)
  
  //eyes
    ellipse(eye1x,eye1y,40,30)
      eye1x += eye1direction;
      if(eye1x <= 88 || eye1x >= 158)
        {
            eye1direction *= -1;
        }


    ellipse(eye2x,eye2y,40,30)
      eye2x += eye2direction;
      if(eye2x <= 210 || eye2x >= 280)
        {
            eye2direction *= -1;
        }
  
  //irises
    circle(iris1x,iris1y,10)
    circle(iris2x,iris2y,10)


        iris1y += iris1direction;
      if(iris1y <= 20 || iris1y >= 370)
        {
            iris1direction *= -1;
        }



        iris2y += iris2direction;
      if(iris2y <= 20 || iris2y >= 370)
        {
            iris2direction *= -1;
        }

  
  
  //nose
    line(188,118,188,180)
    triangle(161,219,188,180,217,219)
  
  //mole
    point(146,255)
  
  //mouth
    line(136,290,248,290)

  //chin
    ellipse(chinx, chiny, 110, 45)

          chinx += chinDirection;
        if(chinx <= 70 || chinx >= 317)
        {
            chinDirection *= -1;
        }


    chiny += chinDirection;
    if(chiny <= 20 || chiny >= 350)
      {
        chinDirection *= -1;
      }


   //eye circles
      fill(80, 69, 15)
      ellipse(128,130,55,30)
      ellipse(250,130,55,30) 
  
  //signature
    fill(120)
    textSize(sizeName);
    sizeName+= sizeDirection;
    count++
    if(count > 5)
      {
        sizeDirection *=-1;
        count = 0
      }
    text('Abigail Julie Van Nortwick <3', 30,390)


}



