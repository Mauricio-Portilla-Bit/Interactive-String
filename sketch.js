h = 20
xi = 200

gravedad = 0.1
x = 200
y = 200
dy = 0
dx = 0 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (mouseIsPressed){
   y = pmouseY
   x = pmouseX
   dy = 0
   dx = 0
  }
  
  ellipse(200,60,20)
  rect(0,385,400,15)
  ellipse (x,y,20)
  rect(0,0,400,5)
  rect(0,200,400,5)
  line(200,5,x,y-10)
  
  //gravedad
  dy = dy + gravedad
  
  //resorte
  dy = dy - (1/400)*(y-h)
  dx = dx - (1/400)*(x-xi)

  //cambio de variable
  y = y + dy
  x = x + dx
  
  //calor del sistema
  dy = dy*.99
  dx = dx*.99
  //choque contra suelo
if (y >= 190)
  if (dy > 0)
  dy = -dy
  // contra techo
if (y <= 15)
  dy = -dy    
  
  print (x,y)
}
