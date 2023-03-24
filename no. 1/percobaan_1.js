function setup() {
  createCanvas(350, 350);
}
/* Nilai RGB default di nilai 0 – 255, untuk menyetel ulang:
• colorMode(RGB, 100) – membuat
rentang nilai RGB menjadi 0 – 100
• colorMode(RGB, 200, 150, 100) –
membuat nilai R: 0 – 200, nilai G: 0 –
150, dan B: 0 – 100
• colorMode(RGB, 255, 100) –
membuat nilai RGB: 0 – 255, dan channel
alpha: 0 – 100 (%)
• Sama:
colorMode(RGB,255,255,255,100)
*/

function draw() {
  colorMode(RGB, 350);
  for (let i = 0; i < 350; i++){
    for (let j = 0; j < 350; j++){
      stroke(i, j, 0);
      point(i, j);
    }
  }
}
