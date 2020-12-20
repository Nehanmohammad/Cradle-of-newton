
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,bobImage;
var roof,rope;

function preload(){

	bobImage = loadImage ("hi/hi.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,500,70,70)
	bob2 = new Bob(270,500,70,70)
	bob3 = new Bob(340,500,70,70)
	bob4 = new Bob(410,500,70,70)
	bob5 = new Bob(480,500,70,70)

	roof = new Ground(100,100,10000,50)

	rope = new Rope(bob.body,roof.body,-bobDiameter*2,0)

	//var bob = createSprite(200,200,100,100);
	//bob.addImage ("hi",bobImage)
	//bob.scale = 0.3
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  drawSprites();
 
}



