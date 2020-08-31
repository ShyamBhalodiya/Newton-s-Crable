
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
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(300, 400);
	bob2 = new bob(350, 300);
	bob3 = new bob(400, 300);
	bob4 = new bob(450, 300);
	bob5 = new bob(500, 400);
	wall = new Roof(400, 200, 250, 20);
	string1 = new chain(wall.body, bob1.body, -100, 0);
	string2 = new chain(wall.body, bob2.body, -50, 0);
	string3 = new chain(wall.body, bob3.body, 0, 0);
	string4 = new chain(wall.body, bob4.body, 50, 0);
	string5 = new chain(wall.body, bob5.body, 100, 0);

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
	background(125);


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
}



