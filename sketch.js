var sword , swordImage , knifeSound

var PLAY=1
var END=0
var gameState=1


var fruit1 , fruit1Image 
var fruit2 , fruit2Image
var fruit3 , fruit3Image
var fruit4 , fruit4Image

var gameOver,gameOverImage

var alien1 , alien1Image
var alien2 , alien2Image

var monster , monsterImage

var fruit 

var enemy

var fruitGroup
var enemyGroup


function preload(){
  
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  
  alien1Image = loadAnimation("alien1.png","alien2.png")
  
 swordImage = loadImage("sword.png")
  
  gameOverImage = loadImage("gameover.png")
  
  knifeSound = loadSound("knifeSwooshSound.mp3")
  
  
  
}

function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(40,200,20,20)
  sword.addImage(swordImage)
  scale.scale = 0.7
  
  sword.setCollider ("rectangle",0,0,40,40)
  
  score=0
  
 fruitGroup = createGroup()
 enemyGroup = createGroup()
  
  
}



function draw(){

  background("lightblue")
  
  if(gameState===PLAY) {
    
    sword.y=World.mouseY
  sword.x=World.mouseX

   if(fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach()
  score=score+2
     knifeSound.play();
     
   }
     
  
  fruits();
  enemy();
  
     if(enemyGroup.isTouching(sword)){
     fruitGroup.destroyEach()
      enemyGroup.destroyEach()
      fruitGroup.velocityX = 0
      enemyGroup.velocityX = 0
      
      sword.addImage(gameOverImage)
      sword.x=200
      sword.y=200
       gameState=END
    
   }
  
  }

  
  
    
drawSprites()

}



function fruits() {

    if (World.frameCount % 80===0) {
      
      fruit = createSprite(600,200,20,20)
      fruit.velocityX=-5;
      fruit.scale = 0.2
       fruit.y = Math.round(random(10,300))
      r=Math.round(random(1,4))
      
      if (r==1) {
       fruit.addImage(fruit1Image)
      } else if (r==2) {
        fruit.addImage(fruit2Image)
      } else if (r==3) {
        fruit.addImage(fruit3Image)
      }else if (r==4) {
        fruit.addImage(fruit4Image)
      }
    }
  }

function enemy(){
  if(World.frameCount%200===0){
    monster = createSprite(400,200,20,20)
    monster.addAnimation("moving", alien1Image)
    monster.y = Math.round(random(100,300))
    monster.VelocityX=-8
    monster.setLifetime=50
    
    enemyGroup.add(monster)
  }
}

