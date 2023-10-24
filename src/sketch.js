function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawDog(200, 400, 0.5);
}

function drawDog(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  //tail
  fill(209, 130, 27);
  triangle(80, -40, 120, -130, 60, -60);
  //back legs
  fill("white");
  ellipse(-110, -35, 50, 70);
  ellipse(110, -35, 50, 70);
  fill(250, 235, 212);
  ellipse(-60, -30, 70, 50);
  ellipse(60, -30, 70, 50);

  fill(244, 155, 162); //paws
  ellipse(-110, -30, 20, 30);
  ellipse(110, -30, 20, 30);
  circle(-110, -60, 10);
  circle(-120, -50, 10);
  circle(-100, -50, 10);
  circle(110, -60, 10);
  circle(120, -50, 10);
  circle(100, -50, 10);

  //body
  fill(209, 99, 34);
  circle(0, -80, 150);
  fill(250, 235, 212);
  triangle(0, -50, -50, -130, 50, -130);
  rect(-20, -70, 40, 60);

  // front legs
  fill(209, 130, 27);
  ellipse(-30, -50, 40, 80);
  ellipse(30, -50, 40, 80);
  fill(255, 255, 255);
  ellipse(-30, -15, 60, 30);
  ellipse(30, -15, 60, 30);

  //head
  fill(209, 99, 34);
  triangle(-50, -270, -80, -230, -100, -330); //ears
  triangle(50, -270, 80, -230, 100, -330);

  fill(244, 155, 162);
  triangle(-60, -270, -80, -250, -90, -310); //inner ears
  triangle(60, -270, 80, -250, 90, -310);

  fill(209, 130, 27);
  circle(0, -205, 170); //base
  triangle(-75, -200, -75, -180, -95, -190); // side fur
  triangle(75, -200, 75, -180, 95, -190);
  triangle(-70, -180, -70, -160, -90, -170);
  triangle(70, -180, 70, -160, 90, -170);
  triangle(-80, -270, -75, -230, -65, -250);
  triangle(80, -270, 75, -230, 65, -250);
  triangle(-70, -290, -65, -250, -55, -270);
  triangle(70, -290, 65, -250, 55, -270);

  fill(255, 255, 255); // nose bridge
  rect(-20, -290, 40, 100);
  ellipse(0, -160, 140, 80);

  ellipse(-40, -250, 30, 10); //eyebrows
  ellipse(40, -250, 30, 10);

  fill("black");
  ellipse(-40, -220, 20, 30); //eyes
  arc(50, -220, 40, 20, PI / 4, -PI / 4, PIE);

  fill("white");
  ellipse(-40, -225, 10, 15); //inner eye

  fill("black");
  ellipse(0, -180, 40, 20); //nose
  fill("white");
  ellipse(0, -185, 20, 10); //inner nose
  fill("black");
  arc(0, -170, 70, 80, 0 * PI, PI, CHORD); //mouth
  fill(244, 155, 162);
  ellipse(0, -145, 50, 30); //tongue

  pop();
}
