var a,b,c,d,e,f,g;
var gameState = "start";
var x,xx;
var count = 0;

function preload() {
  g =  loadAnimation("e.png");
  f =  loadAnimation("a.png");
  d =  loadAnimation("a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png");
}

function setup() {
  createCanvas(400,400);

  a = createSprite(width/2,height-15,width-10,20);
  a.shapeColor = rgb(0,0,0);

  e = createSprite(width/2-20,height-65,width-10,20);
  e.addAnimation("dd",g);
  e.addAnimation("ddd",f);
  e.addAnimation("dddd",d);
  e.scale = 0.3;
  
  
  b = createButton("HEADS");
  c = createButton("TAILS");

  b.position(width-380,height-70);
  c.position(width-100,height-70);
  
  b.style('width', '80px');
  b.style('height', '40px');
  b.style('background', 'orange');

  c.style('width', '80px');
  c.style('height', '40px');
  c.style('background', 'orange');
}

function draw() {
  background(255);

  if(gameState==="start") {
    b.mousePressed(()=>{
      x = "heads";
      gameState = "spin";
    });

    c.mousePressed(()=>{
      x = "tails";
      gameState = "spin";
    });
  }

  if(gameState==="spin") {
    b.hide();
    c.hide();
    
    e.changeAnimation("dddd",d);
    e.velocityY = -12;
      e.velocityY += 1.5;

    if(e.collide(a)) {
      rand = Math.round(random(1,2));
      switch(rand) {
        case 1:e.changeAnimation("ddd",f);
               gameState = "reset";
               break;
        case 2:e.changeAnimation("dd",g);
               gameState = "reset";
               break;
        default:break;
      }
    }
  }

  e.collide(a);

  if(gameState==="reset") {
    
  }

  console.log(e.velocity.y);

  drawSprites();
}