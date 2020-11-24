
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600, 300);
  obstaclesGroup = new Group();
  foodGroup = new Group();
  monkey = createSprite(60,240,30,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.12;
  
  ground = createSprite(300,280,2000,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  var rand = Math.round(random(1,2));
  if(rand==1){
    Spawnfood();
  }
  else{
    Spawnobstacles();
    
  }
}


function draw() {
background(170);
  fill(0);
  textSize(15);
  text("Score :"+score, 480 ,50);
   score = score+Math.round(getFrameRate()/60);
  monkey.velocityY = monkey.velocityY + 0.5
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space") && monkey.y>=200) {
      monkey.velocityY = -9;
  }
  monkey .collide(ground);
  Spawnobstacles();
  Spawnfood();
  drawSprites();
}

function Spawnobstacles(){
  if(frameCount %70 ==0){
var obstacle = createSprite(500,255,10,40);
    
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -4;
    obstaclesGroup.add(obstacle);
  }
}
function Spawnfood(){
  if(frameCount %90 ==0){
     var banana  = createSprite(300,120,40,10);
    banana.x = Math.round(random(70,120));
     banana.addImage(bananaImage);
    banana.velocityX= -4;
     banana.scale = 0.15;
    foodGroup.add(banana);

}
}

