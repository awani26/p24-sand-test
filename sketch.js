
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber, iron, sand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,height,10000,20)

	hammer = new Hammer(700,320,70,70);
    stone = new Stone(520,320,70,70);
	rubber = new Rubber(400, 350);
	iron = new Stone(620,340,80,80);
	sand = new Sand(400, 350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand.display();
  
  drawSprites();
 
}



