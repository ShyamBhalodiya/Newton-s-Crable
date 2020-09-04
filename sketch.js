
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload() {

}

function setup() {
	var canvas = createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	var bobdiameter = 50;
	//Create the Bodies Here.
	wall = new Roof(500, 200, 250, 20);
	bob1 = new bob(400, 300, bobdiameter);
	bob2 = new bob(450, 300, bobdiameter);
	bob3 = new bob(500, 300, bobdiameter);
	bob4 = new bob(550, 300, bobdiameter);
	bob5 = new bob(600, 300, bobdiameter);
	string1 = new chain(bob1.body, wall.body, -bobdiameter * 2, 0);
	string2 = new chain(bob2.body, wall.body, -bobdiameter, 0);
	string3 = new chain(bob3.body, wall.body, 0, 0);
	string4 = new chain(bob4.body, wall.body, bobdiameter, 0);
	string5 = new chain(bob5.body, wall.body, bobdiameter * 2, 0);

	var mousey = Mouse.create(canvas.elt);
	mousey.pixelRatio = pixelDensity();
	var option_m = {
		mouse: mousey
	}
	var mconstraint = MouseConstraint.create(engine, option_m);
	World.add(world, mconstraint);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(225);

	wall.display();
	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	drawSprites();
	
	fill(0);
	textSize(18);
	text("Use Your Mouse to pull balls", 400, 100)
}