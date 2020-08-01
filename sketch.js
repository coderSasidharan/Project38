
var gameState = 0

var score = 0

var obstacle

var Vx = 15

var playerImage

var monster1, monster2, monster3, spear, bgImage

function preload(){
  playerImage = loadImage("player.png")
  monster1 = loadImage("enemy1.png")
  monster2 = loadImage("enemy2.jpg")
  monster3 = loadImage("enemy3.jpg")
  spear = loadImage("spear.png")
  bgImage = loadImage("background.jpg")

}
function setup() {
  createCanvas(displayWidth-20,displayHeight-120);

  player = createSprite(100, 550, 50, 50);
  player.shapeColor = "blue"
  player.addImage(playerImage)
  player.scale = 0.3;
 // player.velocityX = 10;


  ground = createSprite(680,620,displayWidth,70)
  ground.shapeColor = "green"

  obstacle = createSprite(10000,560,40,40);
  obstacle.shapeColor = "red"
  obstacle.addImage(monster1)
  obstacle.scale = 0.24;

  obstacle2 = createSprite(10000,560,40,40);
  obstacle2.shapeColor = "red"
  obstacle2.addImage(monster2)
  obstacle2.scale = 0.23;

  obstacle3 = createSprite(10000,560,40,40);
  obstacle3.shapeColor = "red"
  obstacle3.addImage(monster3)
  obstacle3.scale = 0.23;

  obstacle4 = createSprite(10000,570,10,40);
  obstacle4.shapeColor = "brown"
  obstacle4.addImage(spear)
  obstacle4.scale = 0.05;

  
}


function draw() {
  background("blue");  

  image(bgImage,-100,displayHeight/260,displayWidth*100,displayHeight*1);

  if(gameState == 0){
    start();
  }else if(gameState == 1){
    play();
  }else if(gameState == 2){
    end();
  } 

  drawSprites();
}

function start(){
  if(keyIsDown(UP_ARROW)){
    gameState = 1
  }
  textSize(20)
  fill("green")
  text("Press up arrow to jump and avoid obstacles",550,200)
  text("Press up arrow start game",600,300)

}

function play(){
  player.collide(ground)
  player.velocityX = Vx
  player.velocityY = player.velocityY+1;
  camera.position.x = player.x+600;
  ground.x = player.x+580;
  
  if(keyIsDown(UP_ARROW) && player.y>550){
    player.velocityY = -15;
  }

  score = round(player.x/10);
  textSize(20)
  fill("Blue")
  text("score:"+score,player.x+600,100)
 
  if(score % 200 < 1.5) {
    obstacle.x = player.x+random(1200,2000)
    Vx = Vx+1
  }
  if(player.x < obstacle.x+30 && player.x > obstacle.x-30 && player.y < obstacle.y+45 && player.y>obstacle.y-45){
    gameState = 2;
  }
  
  if(score % 275 < 1.5) {
    obstacle2.x = player.x+random(1200,2000)

  }
  if(player.x < obstacle2.x+30 && player.x > obstacle2.x-30 && player.y < obstacle2.y+45 && player.y>obstacle2.y-45){
    gameState = 2;
  }
  
  if(score % 350 < 1.5) {
    obstacle3.x = player.x+random(1200,2000)

  }
  if(player.x < obstacle3.x+30 && player.x > obstacle3.x-30 && player.y < obstacle3.y+45 && player.y>obstacle3.y-45){
    gameState = 2;
  }
  
  if(score % 100 < 1.5) {
    obstacle4.x = player.x+random(200,400)

  }
  if(player.x < obstacle4.x+30 && player.x > obstacle4.x-30 && player.y < obstacle4.y+45 && player.y>obstacle4.y-45){
    gameState = 2;
  }

}

function end(){
  player.velocityY = 0
  player.velocityX = 0
  fill("red")
  textSize(40)
  text("Game Over",player.x+500,200)
  textSize(30)
  text("Score: "+score,player.x+520,300)
  textSize(15)
  text("Press up arrow to play again",player.x+500,400)
  if(keyIsDown(UP_ARROW)){
    //score = 0;
    player.x = 0;
    obstacle.x = 10000;
    obstacle2.x = 10000;
    obstacle3.x = 10000;
    obstacle4.x = 10000;
    Vx = 15;
    gameState = 1;
  }


}




