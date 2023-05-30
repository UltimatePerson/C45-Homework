var chicken, egg, rock, bush;
var treasure;
var cow, horse;
var canvas, canvasImage;
var eggImage, chickenImage, cowImage, horseImage, mudImage, rockImage, bushImage, treasureImage;
var edges;
var wall;
var music;

function preload() {
  eggImage = loadImage("assets/egg.png");
  chickenImage = loadImage("assets/chicken.png");
  cowImage = loadImage("assets/cow.png");
  horseImage = loadImage("assets/horse.png");
  rockImage = loadImage("assets/rock.png");
  bushImage = loadImage("assets/bush.png");
  treasureImage = loadImage("assets/treasure.png");
  canvasImage = loadImage("assets/background.png");

  music = loadSound("assets/Meadow.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  canvas = createSprite(width / 2, height / 2, windowWidth, windowHeight)
  canvas.addImage(canvasImage);
  canvas.scale = 0.75

  egg = createSprite(width / 2 - 600, height / 2 + 300, 50, 50);
  egg.addImage(eggImage);
  egg.scale = 0.025

  chicken = createSprite(width / 2 + 200, height / 2 + 100, 50, 50);
  chicken.addImage(chickenImage);
  chicken.scale = 0.025;

  cow = createSprite(width / 2 + 600, height / 2 + 0, 50, 50);
  cow.addImage(cowImage);
  cow.scale = 0.15;

  horse = createSprite(width / 2 - 300, height / 2 + 130, 50, 50);
  horse.addImage(horseImage);
  horse.scale = 0.25

  rock = createSprite(width / 2 - 150, height / 2 - 50, 50, 50);
  rock.addImage(rockImage);
  rock.scale = 1.75;

  bush = createSprite(width / 2 + 650, height / 2 + 300, 50, 50);
  bush.addImage(bushImage);
  bush.scale = 0.25;

  treasure = createSprite(width / 2 + 650, height / 2 + 300, 50, 50);
  treasure.addImage(treasureImage);
  treasure.scale = 0.025;
  treasure.visible = false;

  edges = createEdgeSprites();

  wall = createSprite(width/2, height/2 -150, 1500, 50);
  wall.visible = false;

  music.play()

}

function draw() {
  background(51);
  textSize(20);

  if (keyDown(UP_ARROW)) {
    egg.y = egg.y - 5;
  }

  if (keyDown(DOWN_ARROW)) {
    egg.y = egg.y + 5;
  }

  if(keyDown(RIGHT_ARROW)){
    egg.x = egg.x +10;
  }
  
  if(keyDown(LEFT_ARROW)){
    egg.x = egg.x -10;
  }

 

  egg.bounceOff(edges);
  egg.bounceOff(wall);

  drawSprites()

  if(egg.isTouching(horse)){
    fill("white");
    text("You have to find the treasure in the farm! Try talking with the CHICKEN! ", width / 2 - 300, height / 2 + 200);
  }

  if(egg.isTouching(chicken)){
    fill("white");
    text("Im not sure where the treasure is, but the COW seems to know somthing...", width / 2 + 50, height / 2 + 100);
  }

  if(egg.isTouching(cow)){
    fill("red");
    text("Theres a treasure?! Why didnt anyone tell me? I knew that ROCK over there was suspicious!", width / 2 -100, height / 2 -50);
  }

  if(egg.isTouching(rock)){
    fill("black");
    text("Im just a rock. Whats so SUS about me? Try checking that BUSH in the corner...", width / 2 - 400, height / 2 - 100);
  }

  if(egg.isTouching(bush)){
    fill("black");
    text("CONGRATS YOU FOUND THE TREASURE... You can now celebrate cuz the real treasure was you!!!", width/2 -250, height -150);
    treasure.visible = true;
  }
}