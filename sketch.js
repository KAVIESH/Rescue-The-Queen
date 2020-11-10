const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tiger1, tiger2, tiger3;
var wall1,wall2,wall3
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    tiger1 = new Tiger(displayWidth/2, 50, 2, 3);
    tiger2 = new Tiger(displayHeigh/2, 70, 2, 3);
    tiger3 = new Tiger(displayHeigh/2, 90, 2, 3);
    
    //right wall
    wall1 = new Wall(displayWidth-10, displayHeight/2, 10,displayHeight)
    //left wall
    wall2 = new Wall(10, displayHeight/2, 10,displayHeight)
    //bottom wall
    wall3 = new Wall(displayWidth/2, displayHeight -10, displayWidth,10)

//bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
   tiger1.display();
   wall1.display();
   wall2.display();
   wall3.display();
}
