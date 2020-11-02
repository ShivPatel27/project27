
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var chan1, chain2,chain3,chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(150,400,100);
	bob2 = new Bob(250,400,100);
	bob3 = new Bob(350,400,100);
	bob4 = new Bob(450,400,100);
	bob5 = new Bob(550,400,100);

	roof1 = new Roof(350,200,500);
	
	chain1 = new Rope(bob1.body , {x:150, y:200} ,150,400);
	chain2 = new Rope(bob2.body , {x:250, y:200} ,250,400);
	chain3 = new Rope(bob3.body , {x:350, y:200} ,350,400);
	chain4 = new Rope(bob4.body , {x:450, y:200} ,450,400);
	chain5 = new Rope(bob5.body , {x:550, y:200} ,550,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
keypressed();

  drawSprites();
 
}
function keypressed(){
	if(keyCode === 32){
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-300});

	}
}


