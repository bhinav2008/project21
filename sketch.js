
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var gr1,gr2,gr3

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution : 0.3,
	friction : 0,
	density:1.2
}
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
gr1=new Ground(width/2,670,width,20)
gr2=new Ground(1100,600,20,120)
gr3=new Ground(1350,600,20,120)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ellipse(ball.position.x,ball.position.y,20,20)
 gr1.display()
 gr2.display()
 gr3.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


