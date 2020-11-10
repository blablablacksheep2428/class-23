const  Engine=Matter.Engine;
const  World=Matter.World;
const  Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground,ball;
var box1,box2

function setup() {
  createCanvas(800,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;
  
  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,380,800,20,ground_options);
  World.add(myWorld,ground);
  var ball_options={
    isStatic:false,
    restitution:1.0
  }

  ball=Bodies.circle(100,100,20,ball_options);
  World.add(myWorld,ball);

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,150);
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)

  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,20,20)

  box1.display();
  box2.display();
}