const yellow = '#f6c415'
const black = '#000'
const white = '#fff'
const pink = '#cd5c5c'

function setup() {
  createCanvas(400, 269)
  background('#f7d6e6')

  //the background dots
  noStroke()
  fill(pink)
  for(x = 0; x < width; x += 4){
    for(y = 0; y < height; y+= 4){
      circle(x + (y%8/2), y, 2)
    }
  }

  //white circle
  stroke(black)
  strokeWeight(8)
  fill(white)
  ellipse(315, 260, 70, 60)

  //big yellow circles
  fill(yellow)
  strokeWeight(10)
  ellipse(100, 100, 550, 430)
  strokeWeight(28)
  ellipse(50, 60, 550, 430)

  //BLACK BANNANAS
  //strand lookin one on the right side
  noFill()
  stroke(black);
  strokeWeight(6)
  beginShape();
  curveVertex(275, 195);
  curveVertex(275, 195);
  curveVertex(313, 165)
  curveVertex(340, 120);
  curveVertex(350, 50);
  curveVertex(350, 50);
  endShape();
  //lowest
  noStroke()
  fill(black)
  ellipse(60, 65, 450, 400)
  fill(yellow)
  ellipse(60, 40, 450, 400)
  //2nd lowest
  fill(black)
  ellipse(60, 75, 300, 350)
  fill(yellow)
  ellipse(60, 45, 300, 350)
  //3rd lowest
  fill(black)
  ellipse(60, 145, 190, 190)
  fill(yellow)
  ellipse(60, 125, 195, 190)
  //3rd lowest
  fill(black)
  ellipse(60, 120, 190, 190)
  fill(yellow)
  ellipse(57, 115, 200, 195)
  //the one that doesnt look like a banana
  fill(black)
  stroke(black)
  strokeWeight(9)
  beginShape()
  vertex(70, 200)
  bezierVertex(140, 50, 195, 170, 280, -50)
  bezierVertex(250, 75, 70, 150, -20, 100)
  bezierVertex(-20, 150, 0, 200, 70, 200)
  endShape()
  //the 2 strands coming from the top
  noFill()
  strokeWeight(6)
  bezier(150, 80, 210, 50, 290, -30, 225, -100)
  strokeWeight(11)
  bezier(150, 65, 200, 40, 270, -30, 200, -100)
  //the croissant in the top left corner
  noStroke()
  fill(black)
  ellipse(35, 10, 160, 140)
  fill(yellow)
  ellipse(80, -10, 155, 125)

  //the pokey strands in the top left
  fill(black)
  stroke(black)
  strokeWeight(4)
  triangle(75, 70, 60, 0, 70, 0) //left
  triangle(200, 22, 185, 0, 195, 0) //right

  //lines
  stroke(black)
  strokeWeight(8)
  line(0, 20, width, 21)
  line(0, 240, width, 237)
  strokeWeight(4)
  line(0, 160, width, 157)
  line(0, 150, width, 147)
  line(0, 35, 200, 37)
  stroke(white)
  strokeWeight(8)
  line(0, 180, width, 179)
  strokeWeight(14)
  line(0, 100, width, 98)
}
