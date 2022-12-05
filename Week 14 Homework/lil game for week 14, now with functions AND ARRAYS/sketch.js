var playerx = 100;
var playery = 80;

var mousex = 0;
var mousey = 0;

var sqr1x = 250
var sqr1y = 80

var sqr2x = 325
var sqr2y = 636

var shapesX = [];
var shapesY = [];
var diameters = [];

var shapesXSpeeds = [];
var shapesYSpeeds = [];

var shape1Speed
var shape2Speed

var w = 87;
var s = 83;
var a = 65;
var d = 68;

function setup() {
  createCanvas(800, 800);
  frameRate(10);
  
  //shapes variables
    for (var i = 0; i < 50; i++) {
      
      //random size and position
        shapesX[i] = getRandomNumber(750);
        shapesY[i] = getRandomNumber(780);
        diameters[i] = getRandomNumber(50);
      
            
      //random speed
        shapesXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
        shapesYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    }
}

function draw() {
     background(60,00,160);
  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  
  
//call functions
  //call borders
    createBorders(20);
  

  //call player and movement
  createPlayer();
  characterMovement();
  
  //call stationary obstacles
  drawObstacles();
  
  //call escape and win state
  escape()
  checkForExit()
  
  //call mouse object (mouse pressed is below)
  drawMouse()
  
  //shapes, but with arrays now
    for (var i = 0; i < shapesX.length; i++) {
        circle(shapesX[i], shapesY[i], diameters[i]);

        // move the shape
        shapesX[i] += shapesXSpeeds[i];
        shapesY[i] += shapesYSpeeds[i];
   
        //rebound
 if(shapesX[i] > width)
   {
     shapesX[i] = 0;
   }
  
  if(shapesX[i] > height)
    {
      shapesX[i] = 0;
    }
  
  if(shapesY[i] > width)
   {
     shapesY[i] = 0;
   }
  if(shapesY[i] > height)
    {
      shapesY[i] = 0;
    }
}
  
  
}


function createBorders(thickness)
{
    // top
    rect(0,0, width, thickness);
    // left 
    rect(0,0,thickness,height);
    // bottom 
    rect(0, height-thickness,width, thickness);
    // right 
    rect(width-thickness,0,thickness,height-35);
}

//player and player movement
 function createPlayer(x,y) { 

  circle(playerx, playery, 50);
  
}

//allow player to move
function characterMovement()
{
    if (keyIsDown(w))
    {
      playery -= 15
    }
  else if (keyIsDown(s))
    {
      playery += 15
    }
  
   if (keyIsDown(a))
    {
      playerx -= 15
    }
  else if (keyIsDown(d))
    {
      playerx += 15
    }
  
}





//draw stationary obstacles
function drawObstacles() {
  fill(60, 200, 40)
  ellipse(209, 441, 80, 150);
  ellipse(557, 117, 150, 80);
  
}



//color and draw mouse obstacle
function drawMouse() {
fill(200, 120, 80);
circle(mousex, mousey, 75)
}

//move mouse obstacle
function mousePressed()
  {
    mousex = mouseX;
    mousey = mouseY;
  }




//create exit
function escape() { 
//escape
  rect(755, 755, 50, 80);
  textSize(28);
  text('Escape!', 694, 737);
}

//check if player exited
function checkForExit() {
  if(playerx > width && playery > width)
    {
      fill(230, 255, 0);
 
      textSize(26);
      text("You Win!", width/2-80, height/2-80);
    }    
  }

//define random number function
  function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 15;
}
