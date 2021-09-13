const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, computerBase;
var player,computer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  /*
  Width = 1536
  Height = 754
  */
  playerBase = new PlayerBase(250,height/2 + 100,225,200);
  computerBase = new ComputerBase(width-250,height/2 +100,225,200);
  player = new Player(250,height/2 -25,50,100);
  computer = new Computer(width-250,height/2 -25,50,100);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBase.display();
  computerBase.display();
   //display Player and computerplayer
  player.display();
  computer.display();
}
