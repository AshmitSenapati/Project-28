
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;

var stone,stoneImage;
var ground;
var tree,treeImage;
var boy,boyImage;
var sling;
var m1,m2,m3,m4,m5,m6,mImage;

function preload(){
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*
	boy = createSprite(200,600,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.11;
	*/
	stone = new Stone(100,400,20);

	ground = new Ground(700,685,1400,40);
	tree = new Tree(1050,580,450,600);
	
	sling = new Sling(stone.body,{x:140,y:530});
	
	m1 = new Mango(660,310,40);
	m2 = new Mango(710,240,40);
	m3 = new Mango(765,180,40);
	m4 = new Mango(780,290,40);
	m5 = new Mango(850,240,40);
	m6 = new Mango(900,310,40)

	/*
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	  */


	Engine.run(engine);
  
}


function draw() {
  background("cyan");
	image(boyImage, 100,450,200,300);
  
  
  
  Engine.update(engine);

  drawSprites();

  sling.display();

  
  
  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  stone.display();
  
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
	sling.fly()
}

/*
function detectCollision(lstone,lmango){
	pos1 = lstone.body.position;
	pos2 = lmango.body.position;

	var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);
	if(distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body,false)
	}

}
*/

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.radius+lstone.radius)
	  {
		
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.setPosition(stone.body,{x:100,y:400})
		sling = new Sling(stone.body,{x:140,y:530});
	}
}