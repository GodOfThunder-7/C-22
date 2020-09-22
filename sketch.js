const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var ourEngine,ourWorld;
var ground, ball;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,400,400,50,options);
  World.add(ourWorld,ground);
  var balloptions = {
    restitution:1
  }
  ball = Bodies.circle(200,100,20,balloptions);
  World.add(ourWorld,ball)
  //console.log(object.position.x);
}

function draw() {
  background("blue");
  rectMode(CENTER);
  Engine.update(ourEngine);
  fill("brown");
  rect (ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  fill("green");
  ellipse (ball.position.x,ball.position.y,20,20);
}
