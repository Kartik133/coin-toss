var a,b,c,d,e;

function preload() {
  d =  loadAnimation("a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png");
}

function setup() {
  createCanvas(400,400);

  a = createSprite(width/2,height-15,width-10,20);
  a.shapeColor = rgb(0,0,0);

  e = createSprite(width/2,height-15,width-10,20);
  e.addAnimation("dddd",d);
  e.scale = 0.5;
  
  
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

  drawSprites();

  console.log(a.x,a.y);
}
