
var backImg;
var cat, catImg1, catImg2, catImg3; 
var mouse, mouseImg1, mouseImg2, mouseImg3;



function preload() {
    //load the images here
    backImg= loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    mouseImg1= loadAnimation("images/mouse1.png")
    catImg2= loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3= loadAnimation("images/cat4.png"); 
    mouseImg2= loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3= loadAnimation("images/mouse4.png");
  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat= createSprite(750,600);
    cat.addAnimation("catTeasing", catImg1);
    
    cat.scale= 0.2;
    
    mouse= createSprite(100,600);
    mouse.addAnimation("mouseStill", mouseImg1);
   
    mouse.scale= 0.2;
   
 
}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x- mouse.x<(cat.width- mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catStill", catImg3);
        cat.x= 300;
        cat.scale= 0.2;
        cat.changeAnimation("catStill");

        mouse.addAnimation("mouseGlass", mouseImg3);
        mouse.scale= 0.15;
        mouse.changeAnimation("mouseGlass");
    }

 

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


if(keyCode=== LEFT_ARROW){
    cat.addAnimation("catMoving", catImg2)
    cat.changeAnimation("catMoving");

    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    cat.frameDelay= 10;
    mouse.frameDelay= 10; 
    cat.velocityX= -5; 
}

if(keyCode=== DOWN_ARROW){
    cat.velocityX= 0;
}
}