let cols = rows = 4;


function setup() {
  createCanvas(500,500);
  background(30);

}

function draw(){
  let rowsdis = width* 2 /(rows + 2);
  let colsdis = height* 2 /(cols + 2);

  let rectx = width/(rows + 2);

    for (let i = 0; i < cols; i++) {
    let recty = height/(cols + 2);
    for (let a = 0; a < rows; a++) {
      rectMode(CENTER);
      rect(rectx,recty,100,100);
      recty += colsdis;
      console.log(rectx + '= rectx' + recty + '= recty');
    }
    rectx += rowsdis;
  }
}

// function draw(){
//   rectMode(CENTER);
//   rect(width/4,height/4,50,50);
//   rect(width/4,height*3/4,50,50);
//   rect(width*3/4,height/4,50,50);
//   rect(width*3/4,height*3/4,50,50);
//
// }
