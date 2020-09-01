 
var car1,car2,car3,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  speed  = random (55,70);
  speed1  = random (55,70);
  speed2  = random (55,70);
  weight = random (400,1500);  

  car1 = createSprite(50,250, 40, 40);
  car1.shapeColor="black";
  car1.velocityX = speed;
  
  car2 = createSprite(50,200, 40, 40);
  car2.shapeColor="blue";
  car2.velocityX = speed1;

  car3 = createSprite(50,150, 40, 40);
  car3.shapeColor="green";
  car3.velocityX = speed2;
 
  wall = createSprite(1500,200, 60, height/2);
  wall.shapeColor = "red";

}

function draw() {
  background(255,255,255); 
  if(wall.X - car1.X < (car1.width + wall.width) 
  && wall.X - car2.X < (car2.width + wall.width) 
  && wall.X - car3.X < (car3.width + wall.width))
  {
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/ 22509;

    if(deformation > 180)
    {
      car1.shapeColor = color(255,0,0);
      car2.shapeColor = color(255,0,0);
      car3.shapeColor = color(255,0,0);
    }

     if(deformation < 180 && deformation > 100)
     {
       car1.shapeColor = color(230,230,0);
       car2.shapeColor = color(230,230,0);
       car3.shapeColor = color(230,230,0);

     }

     if(deformation < 100)
     {
      car1.shapeColor = color(0,255,0);
      car2.shapeColor = color(0,255,0);
      car3.shapeColor = color(0,255,0);

     }
  }
  
  drawSprites();
}