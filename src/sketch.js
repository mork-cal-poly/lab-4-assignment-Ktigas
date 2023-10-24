let dog_x = 400;
let clicked = false;
let r = 0;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(225);
  drawBackground();
  drawDog(dog_x, 400, 0.7);
  drawFish(100, 100, 0.5, r);
  updateDog();
  updateFish();
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

function drawFish(x, y, s, r) {
  push();
  translate(x, y);
  scale(s);
  rotate(r);
  noStroke();
  fill("#7C284A"); //tail
  rect(75, -20, 70, 200, 0, 50, 0, 0);
  fill("#631B43");
  rect(90, -20, 40, 200, 0, 50, 0, 0);
  fill("#639010");
  triangle(20, 180, 75, 90, 75, 180);
  fill("#4B7A95");
  triangle(145, 180, 145, 50, 180, 180);
  triangle(-70, 50, -80, 115, -20, 95); //fins
  triangle(-80, 115, -20, 95, 10, 145);
  triangle(-30, 60, 50, 60, 60, 110);
  fill("#972950"); //base
  ellipse(0, 0, 200, 150);
  triangle(-95, -10, -120, 5, -95, 5); //spout
  triangle(-95, 25, -120, 10, -95, 10);
  fill("#265064"); //head
  triangle(-60, -60, 50, -140, 50, -80);
  fill("#4B7A95");
  triangle(-60, -60, 50, -120, 50, -100);
  pop();
}

function drawBackground() {
  noStroke();
  fill(214, 206, 243); //purple
  circle(350, 200, 120);
  circle(50, 350, 120);
  circle(70, 100, 200);
  circle(320, 50, 100);
  fill(140, 195, 230); //blue
  circle(400, 300, 140);
  circle(70, 280, 100);
  circle(200, 20, 130);

  fill(230, 52, 125);
  circle(350, 100, 60);
  triangle(310, 130, 325, 110, 345, 130);
  fill(255, 255, 255);
  beginShape();
  curveVertex(370, 80);
  curveVertex(350, 100);
  curveVertex(370, 90); // top right bump
  curveVertex(350, 120); // bottom point
  curveVertex(330, 90); // left top bump
  curveVertex(350, 100);
  curveVertex(330, 80);
  endShape();
}

function updateDog() {
  if (clicked) {
    dog_x = dog_x - 1;
  }
}

function mouseClicked() {
  if (mouseX > 350 && mouseX < 400 && mouseY > 250 && mouseY < 400)
    clicked = !clicked;
}

function updateFish() {
  if (dog_x < 100 && dog_x > -100) r = r + PI / 20;
}
