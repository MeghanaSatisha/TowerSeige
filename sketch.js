const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,slingShot;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
  ground1 = new Ground(430,360,240,10);
  ground2 = new Ground(645,200,160,10);
//ground1 blocks
  block1 = new Box(360,335,30,40);
  block2 = new Box(390,335,30,40);
  block3 = new Box(420,335,30,40);
  block4 = new Box(440,335,30,40);
  block5 = new Box(470,335,30,40);
  block6 = new Box(500,335,30,40);

  block7 = new Box(390,295,30,40);
  block8 = new Box(420,295,30,40);
  block9 = new Box(440,295,30,40);
  block10 = new Box(470,295,30,40);
 
  block11 = new Box(430,255,30,40);

  //ground2 blocks

  block12 = new Box(690,190,30,40);
  block13 = new Box(660,190,30,40);
  block14 = new Box(630,190,30,40);
  block15 = new Box(600,190,30,40);

  block16 = new Box(660,150,30,40);
  block17 = new Box(630,150,30,40);

  polygon = new Polygon(100,150,15);
  slingShot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background("black"); 
  Engine.update(engine);

  fill("brown");
  ground1.display();
  fill("blue");
  ground2.display();

  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill("orange");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  fill("yellow");
  block11.display();
  fill("purple");
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  fill("pink");
  block16.display();
  block17.display();
 
  polygon.display();
  slingShot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}