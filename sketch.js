const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas,engine;
var gameState=0;
var database,quiz,question,contestantCount,contestant;


function setup(){
  canvas = createCanvas(850,400);
  rectMode(CENTER);
  database = firebase.database();
  
  engine = Engine.create();
	world = engine.world;

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  Engine.run(engine);
}


function draw(){
  background(0);

  if(contestantCount === 1){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(gameState === 2){
    quiz.end();
  }

}
