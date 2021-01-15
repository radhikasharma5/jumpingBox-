var canvas;
var music;
var box;
var rect1,rect2,rect3,rect4;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1 = createSprite(50,590,200,20);
    rect1.shapeColor="blue";
    rect2 = createSprite(270,590,200,20);
    rect2.shapeColor="orange";
    rect3 = createSprite(500,590,200,20);
    rect3.shapeColor="purple";
    rect4 = createSprite(730,590,200,20);
    rect4.shapeColor="green";
    
    surface1 = createSprite(400,595,800,5);
    surface1.visible = false;
    surface1.debug = true;
    surface2 = createSprite(795,400,5,800);
    surface2.visible = false;
    surface2.debug = true;
    surface3 = createSprite(400,5,800,5);
    surface3.visible = false;
    surface3.debug = true;
    surface4 = createSprite(5,400,5,800);
    surface4.visible = false;
    surface4.debug = true;
    //create 4 different surfaces
    

     box = createSprite(random(20,750),300,30,30);
     box.shapeColor="white";
     box.debug = false;
    //create box sprite and give velocity

    box.velocityX=5;
    box.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    
    drawSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.x - box.x < box.width/2 + surface1.width/2 &&
        box.x - surface1.x < box.width/2 + surface1.width/2 &&
        surface2.x - box.x < box.width/2 + surface2.width/2 &&
        box.x - surface2.x < box.width/2 + surface2.width/2 ){
           
            box.velocityX = box.velocityX * (-1); 
    } 
    if(surface3.x - box.x < box.width/2 + surface3.width/2 &&
        box.x - surface3.x < box.width/2 + surface3.width/2 &&
        surface4.x - box.x < box.width/2 + surface4.width/2 &&
        box.x - surface4.x < box.width/2 + surface4.width/2 ){
            
            box.velocityX = box.velocityX * (-1); 
    }     
        
     if(surface1.y - box.y < box.height/2 + surface1.height/2 &&
        box.y - surface1.y < box.height/2 + surface1.height/2 &&
        surface2.y - box.y < box.height/2 + surface2.height/2 &&
        box.y - surface2.y < box.height/2 + surface2.height/2 ){
           
           box.velocityY = box.velocityY * (-1);  
     }
     if(surface3.y - box.y < box.height/2 + surface3.height/2 &&
        box.y - surface3.y < box.height/2 + surface3.height/2 &&
        surface4.y - box.y < box.height/2 + surface4.height/2 &&
        box.y - surface4.y < box.height/2 + surface4.height/2 ){
            
            box.velocityY = box.velocityY * (-1); 
    }
    
     if(box.x - rect1.x < box.width/2 + rect1.width/2 &&
        rect1.x - box.x < box.width/2 + rect1.width/2 &&
        box.y - rect1.y < box.height/2 + rect1.height/2 &&
        rect1.y - box.y < box.height/2 + rect1.height/2){
            music.play();      
            box.shapeColor="blue";    
    }
    if(box.x - rect2.x < box.width/2 + rect2.width/2 &&
        rect2.x - box.x < box.width/2 + rect2.width/2 &&
        box.y - rect2.y < box.height/2 + rect2.height/2 &&
        rect2.y - box.y < box.height/2 + rect2.height/2){
        music.stop();   
        box.shapeColor="orange"; 
        box.velocityX = 0;
        box.velocityY = 0;     
    }
    if(box.x - rect3.x < box.width/2 + rect3.width/2 &&
        rect3.x - box.x < box.width/2 + rect3.width/2 &&
        box.y - rect3.y < box.height/2 + rect3.height/2 &&
        rect3.y - box.y < box.height/2 + rect3.height/2){
        music.play();
        box.shapeColor="purple";      
    }
    if(box.x - rect4.x < box.width/2 + rect4.width/2 &&
        rect4.x - box.x < box.width/2 + rect4.width/2 &&
        box.y - rect4.y < box.height/2 + rect4.height/2 &&
        rect4.y - box.y < box.height/2 + rect4.height/2){
        music.play();   
        box.shapeColor="green";     
    }
}