function setup() {
  createCanvas(400, 269)
  background('#f7d6e6')

  //the background dots
  noStroke()
  fill('#cd5c5c')
  for(x = 0; x < width; x += 4){
    for(y = 0; y < height; y+= 4){
      circle(x + (y%8/2), y, 2)
    }
  }

  //white circle
  stroke(0)
  strokeWeight(8)
  fill(256)
  ellipse(315, 260, 70, 60)

  //big yellow circles
  fill('#f6c415')
  strokeWeight(10)
  ellipse(100, 100, 550, 430)
  strokeWeight(28)
  ellipse(50, 60, 550, 430)

  //black bananas
  /*fill(0)
  noStroke()
  beginShape();
  vertex(-20, -20);
  bezierVertex(-50, 50, -50, 50, 100, 60);
  bezierVertex(-75, 100, 50, 100, -20, -20);
  endShape();*/

  //lines
  strokeWeight(8)
  line(0, 20, width, 21)
  line(0, 240, width, 237)
  strokeWeight(4)
  line(0, 160, width, 157)
  line(0, 150, width, 147)
  line(0, 35, 200, 37)
  stroke(256)
  strokeWeight(8)
  line(0, 180, width, 179)
  strokeWeight(14)
  line(0, 100, width, 98)
}
