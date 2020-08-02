
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var bin, bin2, bin3;

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;

    Engine.run(engine);
  
	ground = new Ground(600,590,1600,10);
	ball = new Ball(150, 586);

	bin = new Bin (1000,580,10);
	bin2 = new Bin2 (950,535,100);
	bin3 = new Bin2 (1050,535,100);
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  ball.display();
  bin.display();
  bin2.display();
  bin3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:20, y:-18});
	}
}


