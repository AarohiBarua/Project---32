const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,slingshot;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200,50);
    slingshot = new SlingShot(polygon.body,{x:200,y:50});
}

function preload(){
    getTime();
}

function draw(){
    background("white");
    Engine.update(engine);
    console.log(polygon.body.position.x);
    console.log(polygon.body.position.y);
    console.log(polygon.body.angle);
    polygon.display();
}

function mouseDragged(){
    if(gameState !=="launched"){
        Matter.body.setPosition(polygon);
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
 function keyPressed(){
     if(keyCode === 32){
         //slingShot.attach(polygon.body);
     }
 }

 async function getTime(){
     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var responseJSON = await response.json();
     var datetime = responseJSON.datetime;
     var hour = datetime.slice(11,13);
     if(hour >= 05 && hour <= 17){
         background("black");
     }
     else{
         background("white");
     }
 }