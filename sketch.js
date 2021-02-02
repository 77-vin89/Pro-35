var balloon,backgroundimg;

function preload()   {
  backgroundimg=loadImage("images/Hot Air Ballon-01.png");
  balloon =loadImage("images/Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.x=balloon.x+10;
  }
  drawSprites();
  }