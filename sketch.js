var a,b,c,d,e,f,g,h,i,k;
var gameState = "start";
var x,xx;
var j = -12;

function preload() {
  g =  loadAnimation("e.png");
  f =  loadAnimation("a.png");
  d =  loadAnimation("a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png");
  i = loadSound("toss.mp3");
  k = loadSound("collide.mp3");
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
  h = createButton("TOSS AGAIN");

  b.position(width-380,height-70);
  c.position(width-100,height-70);
  h.position(width-120,height-70);
  
  b.style('width', '80px');
  b.style('height', '40px');
  b.style('background', 'orange');

  c.style('width', '80px');
  c.style('height', '40px');
  c.style('background', 'orange');

  h.style('width', '100px');
  h.style('height', '40px');
  h.style('background', 'orange');
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
    j+=0.3;

    if(e.collide(a)) {
      rand = Math.round(random(1,2));
      switch(rand) {
        case 1:e.changeAnimation("ddd",f);
               xx = "heads";
               i.play();
               gameState = "reset";
               break;
        case 2:e.changeAnimation("dd",g);
               xx = "tails"; 
               i.play();
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
      textSize(40);
      noStroke();
      fill(0);
      text("You Won",width/2,height/2);
    }else{
       textAlign(CENTER);
       textSize(40);
       noStroke();
       fill(0);
       text("You Lost",width/2,height/2);
     }

    h.mousePressed(()=>{
      j = -12;
      gameState = "start";
    });
  }

  console.log(e.velocity.y);

  drawSprites();
}