
var monkey , monkey_running
var bananas ,bananaImage, obstacle,obstacles, obstacleImage
var FoodGroup, obstacleGroup,ground;
var score, survival

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  
}



function setup() {
 createCanvas(400,400); 

 ground=createSprite(200,350,900,10);

  
  
  monkey=createSprite(50,320,20,20);
 monkey.addAnimation("mon", monkey_running);
  monkey.scale=0.1;
  
  obstacleGroup= new Group();
  FoodGroup= new Group();
  score=0;
}


function draw() {
background("lightblue");
  monkey.collide(ground);
  
  
  if(keyWentDown("space")&&monkey.y>=260){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.5;
  

  obstacles();
  banana();
  
  //scores
  stroke("white");
  textSize(20);
  fill("white");
  text("score=" + score,50,50);
  
  //survival time
   stroke("black");
  textSize(20);
  fill("black");
  survival=Math.ceil(frameCount/frameRate())
  text("Survival Time=" + survival,200,50);
  
  
  
  
  
  
 drawSprites(); 
  
}

function obstacles(){
  if(frameCount%300===0){
   obstacle=createSprite(400,320,20,20);
    obstacle.velocityX=-4;
    obstacle.addImage("ob",obstaceImage);
    obstacle.scale=0.2;
    obstacle.lifetime=104;
    obstacleGroup.add(obstacle);
  }
}

function banana(){
 if(frameCount%80===0){
   
   
   bananas=createSprite(400,Math.round(random(150,250)),20,20);
 bananas.velocityX=-4;  
   bananas.addImage("ban",bananaImage);
   bananas.scale=0.1;
   bananas.lifetime=107;
   FoodGroup.add(bananas);
    if(monkey.isTouching(bananas)){
     
     FoodGroup.destroyEach();
   }
   
  
 } 
  
  
  
  
}


