const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var blueLine, greenLine, yellowLine, redLine;
var waterballoon, waterBalloonImg;
var slingshot;
var boy, boyImg;
var BackgroundImg;
var Score=0;
//var chance=0;
var gameState;
var launchingForce=70;

function preload(){
  backgroundImg=loadImage("backgroundImg.jpg");
  boyImg=loadImage("boy.png");
  waterBalloonImg=loadImage("waterballoon.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  boy=new Boy(135, 540, 180, 230);

  blueLine=new Line(1150, 550, 10, 100, "darkBlue");

  yellowLine=new Line(950, 550, 10,100, "yellow");

  greenLine=new Line(750, 550, 10,100, "green");

  redLine=new Line(550, 550, 10, 100, "red");
  waterballoon= new WaterBalloon(45, 475, 35, 50);

  slingshot=new SlingShot(waterballoon.body,{x:80,y:485})

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  textSize(25);
  fill(rgb(0, 128, 255));
  text("Score: " + Score, 1050, 50);

  textSize(25);
  fill(rgb(0, 128, 255));
  text("Press the space key to get a second chance!", 350, 50);

  stroke("black");
  fill("darkBlue");
  textSize(25);
  fill("red");
  text("10", 560, 550);
  fill("green");
  text("20", 760, 550);
  fill("yellow");
  text("30", 960, 550);
  fill("DarkBlue");
  text("40", 1160, 550);

  if(gameState="play"){
    if(Score>=70){
      textSize(30);
      text("YOU WIN!!", 550, 250);
    }

    /* else{
      textSize(30);
      text("YOU LOSE", 550, 250);

    }*/
  }

  blueLine.display();
  greenLine.display();
  yellowLine.display();
  redLine.display();
  boy.display();
  waterballoon.display();
  slingshot.display();
  
  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(waterballoon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
	  slingshot.attach(waterballoon.body);
	}
  }