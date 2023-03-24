function setup() {
  createCanvas(360, 360);
  background(0);
  noStroke();
  //membuat parameter alpha max. 100
  colorMode(RGB, 255, 255, 255, 100);
  noLoop();
}

function draw() {

  //membuat segiempat sebagai background
  fill(255, 255, 0);
  rect(0, 0, 180, 360);

  /*
  membuat 5 segiempat dengan
  opacity menurun 20% setiap segiempat
  */

   for(let i = 0; i < 6; i++){
    fill(255, 0, 0, (100-i*20));
    rect(0, i*72, 360, 60 );
   }

}
