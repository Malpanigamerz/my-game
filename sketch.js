var PLAY = 1;
var END = 0;
var gameState = PLAY;

var dabangg,dabangg_running, dabangg_collided;

var monster;
var monsterImage1, monsterImage2, monsterImage3, monsterImage4, monsterImage5;
 
var monsterGroup;

var track1, track2, track3;

var score = 0;

var restart, gameOver;

function preload(){
 monsterImage1 = loadImage("moster1.png") 
 monsterImage2 = loadImage("moster2.png") 
 monsterImage3 = loadImage("moster3.png")  
 monsterImage4 = loadImage("moster4.png") 
 monsterImage5 = loadImage("moster5.png")  
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-150);
  
  //dabangg = createSprite(65,160,30,50);
  
  track1 = createSprite(displayWidth-800,-displayHeight*4,20,400);
  track1.y = track1.height /2;
  
  track2 = createSprite(displayWidth-700,180,20,400);
  track2.y = track2.height /2;
  
  track3 = createSprite(displayWidth-600,180,20,400)
  track3.y = track3.height /2;

  monsterGroup = new Group();
  
  score = 0;
}

function draw() {
  background(255);
  /*
  text("Score: "+ score, 50,50);
  
  camera.position.x = 0;
  camera.position.y = 20;
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/200);
    
    if(keyDown("space") && dabangg .y >= 159) {
      dabangg.velocityY = -10;
    }
  
    dabangg.velocityY = dabangg.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    dabangg.collide(invisibleGround);
    
    spawnMonsters();
  
    if(monsterGroup.isTouching(dabangg)){
        gameState = END;
    }
    
    else if (gameState === END) {
    ground.velocityX = 0;
    monster.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    }
    */
  drawSprites();
}
  
  
  function spawnMonsters() {
  if(frameCount % 60 === 0) {
    var monster = createSprite(600,165,10,40)
    monster.velocityX = -(6 + 3*score/100);
    
    
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: monster.addImage(monsterImage1);
              break;
      case 2: monster.addImage(monsterImage2);
              break;
      case 3: monster.addImage(monsterImage3);
              break;
      case 4: monster.addImage(monsterImage4);
              break;
      case 5: monster.addImage(monsterImage5);
              break;
      default: break;
    }
     monster.scale = 0.1;
     monster.lifetime = 300;
    monsterGroup.add(monster);
    }
  }