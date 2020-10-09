
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree_img, tree, boy_img, boy;

function preload()
{
	tree_img = loadImage("tree.png");
	boy_img = loadImage("boy.png");
	mango_img = loadImage("mango.png");
	hexagon_img = loadImage("Hexagon shape.png");
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(470, 500, 2000, 10);
	ground.shapeColor = "brown";
	platform1 = createSprite(395, 259, 200, 10);
	platform1.shapeColor = "orange";
	
	//level 1
	Block1 = createSprite(330, 235, 30, 40);
	Block1.shapeColor = "blue";
	Block2 = createSprite(360, 235, 30, 40);
	Block2.shapeColor = "green";
	Block3 = createSprite(390, 235, 30, 40);
	Block3.shapeColor = "purple";
	Block4 = createSprite(420, 235, 30, 40);
	Block4.shapeColor = "yellow";
	Block5 = createSprite(450, 235, 30, 40);
	Block5.shapeColor = "aqua";

	//level 2
	Block6 = createSprite(360, 195, 30, 40);
	Block6.shapeColor = "blue";
	Block7 = createSprite(390, 195, 30, 40);
	Block7.shapeColor = "green";
	Block8 = createSprite(420, 195, 30, 40);
	Block8.shapeColor = "purple";

	//top
	Block9 = createSprite(390, 155, 30, 40);
	Block9.shapeColor = "aqua";

	platform2 = createSprite(850, 350, 200, 10);
	platform2.shapeColor = "orange";
	
	//level 1
	Block1 = createSprite(790, 325, 30, 40);
	Block1.shapeColor = "blue";
	Block2 = createSprite(820, 325, 30, 40);
	Block2.shapeColor = "green";
	Block3 = createSprite(850, 325, 30, 40);
	Block3.shapeColor = "purple";
	Block4 = createSprite(880, 325, 30, 40);
	Block4.shapeColor = "yellow";
	Block5 = createSprite(910, 325, 30, 40);
	Block5.shapeColor = "aqua";

	//level 2
	Block6 = createSprite(820, 285, 30, 40);
	Block6.shapeColor = "blue";
	Block7 = createSprite(850, 285, 30, 40);
	Block7.shapeColor = "green";
	Block8 = createSprite(880, 285, 30, 40);
	Block8.shapeColor = "purple";

	//top
	Block9 = createSprite(850, 245, 30, 40);
	Block9.shapeColor = "aqua";

	hexagon = createSprite(1250, 380, 50, 50);
	hexagon.addImage(hexagon_img);
	hexagon.scale = 0.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  drawSprites(); 
}

function mouseDragged() {
    Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}

function mouseRealeased() {
    Slingshot.fly();
}
