  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint
  
  var engine, world;
  var backgroundImg;
  var snow = [];
  //var boy , boyImg;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  //boyImg = loadImage("boy.png");
}

function setup() {
      createCanvas(1200,900);
      engine = Engine.create();
      world = engine.world;

     // snow1 = new Snow(Math.round(random(0,800)),0,10);
     // snow2 = new Snow(Math.round(random(0,800)),0,20);

     // boy = createSprite(100,400,10,10);
    //  boy.addImage(boyImg);
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine); 

  if(frameCount%1=== 0){
    snow.push(new Snow(random(10,10000),3,9));

  }
  
 for(var i = 0 ; i<snow.length; i++){
   snow[i].display();
 }

}
//function Spacebar(){
  //if(keyDown("space") && boy.y >= 400) {
    //boy.velocityY = -12;
  ///}
//}
  //  function moving(){
    //  if(keyDown = "left"){
//        boy.x = boy.x-2;
  //    }
//
  //    if(keyDown = "right"){
//        boy.x = boy.x+2;
//      }
  //  }