let cols = rows = 9;

function setup() {
  createCanvas(800,800);
  background(30);

}

function draw(){
  let thisy = height/10;
  for (let i = 0; i < rows; i++) {
    let thisx = width/10;
    for (let i = 0; i < cols; i++) {
      cuad(thisx,thisy);
      thisx += height/10;
    }
    thisy += width/10;
  }

}

function cuad(x,y){
  rectMode(CENTER);
  fill(140);
  rect(x, y, 40, 40);
}
