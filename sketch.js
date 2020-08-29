
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(300, 350);
	bob2 = new bob(350, 350);
	bob3 = new bob(400, 350);
	bob4 = new bob(450, 350);
	bob5 = new bob(500, 350);
	wall = new Roof(400, 200, 250, 20);
	ground = new Roof(400, 700,width,100);
    string1 = new chain(wall.body, bob1.body, -100, 0);
	string2 = new chain(wall.body, bob2.body, -50, 0);
    string3 = new chain(wall.body, bob3.body, 0, 0);
	string4 = new chain(wall.body, bob4.body, 50, 0);
	string5 = new chain(wall.body, bob5.body, 100, 0);
}


function draw() {
	rectMode(CENTER);
	background(125);
	Engine.update(engine);	
	wall.display();
	ground.display();
	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
	
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob1.display();
	drawSprites();

}



