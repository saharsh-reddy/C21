
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(500,500,50,50);
  gameObject1.shapeColor = "green"

  gameObject2 = createSprite(700,700,50,50);
  gameObject2.shapeColor = "green"
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
   movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(movingRect,gameObject1){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else if(movingRect,gameObject2){
    movingRect.shapeColor = "red";
   gameObject2.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
    fixedRect.shapeColor = "green"
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}




