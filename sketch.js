var ball, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 ball = createSprite(200,200,20,20);
 ball.shapeColor = "red"


  var ballP = database.ref('ball/position');
  ballP.on("value", readPosition);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
database.ref('ball/position').set({
  x:position.x+x,
  y:position.y+y
})  
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  ball.x = position.x;
  ball.y = position.y;
}

