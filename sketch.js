const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  

    ground1 = new Ground(480,790,1000,10)
    
}

function draw() {
  background("orange");  
  drawSprites();
  
  ground1.display()

  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var k = 0; k<divisions.length; k++){
  divisions[k].display();
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }

  for(var j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }

  for(var j = 0; j<plinkos.length; j++){
 plinkos[j].display();
 }
  
}