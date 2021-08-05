var box;

function setup() {
  createCanvas(400,400);

  box =  createSprite (200,200,30,30);
}

function draw() 
{
  background("black");

  if (keyIsDown (RIGHT_ARROW)) {
    box.x = box.x+5;

    background('lightPink');
  }


  if (keyIsDown (LEFT_ARROW)) {
    box.x = box.x-5;

    background('lightBlue');
  }

  if (keyIsDown (UP_ARROW)) {
    box.y = box.y-5;

    background('lightYellow');
  }


  if (keyIsDown (DOWN_ARROW)) {
    box.y = box.y+5;

    background('lightGreen');
  }
  drawSprites();
}




