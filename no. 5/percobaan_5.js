function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  noLoop();
}
/*  Nilai maksimal HSL/HSB default di nilai H: 360,
S: 100, dan L/B: 100. Untuk menyetel ulang:
• colorMode(HSB, 100) – membuat semua
nilai maksimal komponen HSB menjadi 0 –
100
• colorMode(HSB, 360, 100, 100) –
membuat nilai maksimal HSB seperti default
• colorMode(HSB, 360, 100, 100, 100) –
menambahkan nilai maksimal channel alpha:
100
*/

function draw() {
  let lawnGreen = color(124, 252, 0);
  let abuAbu = color('#777777');

  fill(lerpColor(lawnGreen, abuAbu,0.2));
  rect(0,0,500,100);
  
  fill(lerpColor(lawnGreen, abuAbu,0.4));
  rect(0,100,500,100);
  
  fill(lerpColor(lawnGreen, abuAbu,0.6));
  rect(0,200,500,100);
  
  fill(lerpColor(lawnGreen, abuAbu,0.8));
  rect(0,300,500,100);
  
  fill(lerpColor(lawnGreen, abuAbu,1));
  rect(0,400,500,100);
}