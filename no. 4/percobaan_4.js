function setup() {
  createCanvas(500, 500);
  background(0);
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
fill(`#F22A2A`);
rect(0,0, 100,500);

fill('#F2CA2A');
rect(100,0, 100,500);

fill('#72F22A');
rect(200,0, 100,500);

fill('#2AA3F2');
rect(300,0, 100,500);

fill('#D02AF2');
rect(400,0, 100,500);

}
