//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogimg,doghappy;
function preload()
{
  //load images here
  dogimg= loadImage("images/dog.png")
  doghappy= loadImage("images/dog1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(400,350,50,50);
  dog.addImage(dogimg);
  foodStock= database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background("white")
text("Food Reamaining :"+ foodS,200,200)

if(keyDown(UP_ARROW)){
    
     writeStock(foodS);
     dog.addImage(doghappy)

}else{

  dog.addImage(dogimg)

}
  drawSprites();
  //add styles here

}

function readStock(data){

  foodS=data.val();
}
function writeStock(x){

  if(x<=0){

    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({

    Food:x
  })
}