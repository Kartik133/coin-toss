var a,b,c,d,e,f,g,h,i,k;
var gameState = "start";
var x,xx;
var j = -20;

function preload() {
  g =  loadAnimation("e.png");
  f =  loadAnimation("a.png");
  d =  loadAnimation("a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png");
  i = loadSound("toss.mp3");
  k = loadSound("collide.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  a = createSprite(width/2,height-15,width-10,20);
  a.shapeColor = rgb(0,0,0);

  e = createSprite(width/2,height-65,width-10,20);
  e.addAnimation("dd",g);
  e.addAnimation("ddd",f);
  e.addAnimation("dddd",d);
  e.scale = 1;
  
  
  b = createButton("HEADS");
  c = createButton("TAILS");
  h = createButton("TOSS AGAIN");

  b.position(20,height-110);
  c.position(width-180,height-110);
  h.position(width-220,height-140);
  
 // b.style('width', '160px');
 // b.style('height', '80px');
  b.style('background', 'orange');
  b.style('font-size', '40px');

 // c.style('width', '160px');
 // c.style('height', '80px');
  c.style('background', 'orange');
  c.style('font-size', '40px');

 // h.style('width', '200px');
 // h.style('height', '100px');
  h.style('background', 'orange');
  h.style('font-size', '40px');
}

function draw() {
  background(255);

  if(gameState==="start") {
    h.hide();

    b.show();
    c.show();

    b.mousePressed(()=>{
      x = "heads";
      i.play();
      gameState = "spin";
    });

    c.mousePressed(()=>{
      x = "tails";
      i.play();
      gameState = "spin";
    });
  }

  if(gameState==="spin") {
    b.hide();
    c.hide();
    
    e.changeAnimation("dddd",d);
    e.velocityY = j;
    j+=0.5;

    if(e.collide(a)) {
      rand = Math.round(random(1,2));
      switch(rand) {
        case 1:e.changeAnimation("ddd",f);
               xx = "heads";
               k.play();
               gameState = "reset";
               break;
        case 2:e.changeAnimation("dd",g);
               xx = "tails"; 
               k.play();
               gameState = "reset";
               break;
        default:break;
      }
    }
  }

  e.collide(a);

  if(gameState==="reset") {
    h.show();

    if(x===xx) {
      textAlign(CENTER);
      textSize(120);
      noStroke();
      fill(0);
      text("You Won",width/2,height/2);
    }else{
       textAlign(CENTER);
       textSize(120);
       noStroke();
       fill(0);
       text("You Lost",width/2,height/2);
     }

    h.mousePressed(()=>{
      j = -20;
      gameState = "start";
    });
  }

  console.log(e.velocity.y);

  drawSprites();
}