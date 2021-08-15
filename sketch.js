const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bobs;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bobs,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con);	

rope1 = new rope(bobs,roof,300,350);
rope2 = new rope(bobs,roof,350,350);
rope3 = new rope(bobs,roof,400,350);
rope4 = new rope(bobs,roof,450,350);
rope5 = new rope(bobs,roof,500,350);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here



  
  //create ellipse shape for multiple bobs here
	ellipse(300,350,50);
	ellipse(350,350,50);
	ellipse(400,350,50);
	ellipse(450,350,50);
	ellipse(500,350,50);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
