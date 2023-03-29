function setup() {
  createCanvas(360, 360);
}
/*  Nilai maksimal HSL/HSB default di nilai H: 360,
S: 100, dan L/B: 100. Untuk menyetel ulang:
• colorMode(HSB, 100) – membuat semua
nilai maksimal komponen HSB menjadi 0 – 100
• colorMode(HSB, 360, 100, 100) –
membuat nilai maksimal HSB seperti default
• colorMode(HSB, 360, 100, 100, 100) –
menambahkan nilai maksimal channel alpha: 100
*/

function draw() {
  colorMode(HSB, 360);
  for (let i = 0; i < 360; i++){
    for (let j = 0; j < 360; j++){
      stroke(i, j, 360);
      point(i, j);
    }
  }
}
