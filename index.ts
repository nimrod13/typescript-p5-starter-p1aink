// Import stylesheets
import './style.css';
import p5 = require('p5');

var canvas;

function setup(p: p5) {
  canvas = p.createCanvas(window.innerWidth, window.innerHeight);
  p.frameRate(2);
}

let counter = 0;

function draw(p: p5) {
  counter++;

  p.background('black');
  // if (counter % 2 === 0) {
  //   p.line(0, 0, 1000, 50);
  // } else {
  //   p.line(1000, 10, 1000, 1000);
  // }
  // if (counter % 2 === 0) {
  //   p.line(0, 10, window.innerWidth, 10);
  // } else {
  //   p.line(10, 10, 10, window.innerHeight);
  // }
  // p.strokeWeight(3);
  // p.stroke('pink');

  // for (let y = 0; y < window.innerHeight; y += 50) {
  //   p.line(0, y, window.innerWidth, y);
  // }

  // for (let x = 0; x < window.innerWidth; x += 50) {
  //   p.line(x, 0, x, window.innerHeight);
  // }

  // for (let y = 0; y < window.innerHeight; y += 50) {
  //   // p.line(0, window.innerHeight, window.innerWidth / 2, y);
  //   p.line(0, window.innerHeight / 2, window.innerWidth, y);
  // }

  // for (let y = 0; y < window.innerHeight; y += 50) {
  //   // p.line(window.innerWidth, window.innerHeight, window.innerWidth / 2, y);
  //   p.line(window.innerWidth, window.innerHeight / 2, 0, y);
  // }

  for (let y = 50; y < window.innerHeight - 50; y += 25) {
    p.colorMode(p.HSB, window.innerWidth + window.innerHeight);
    // p.colorMode(p.RGB, window.innerHeight);
    // p.fill(window.innerHeight, y, 255);
    // p.stroke(window.innerHeight, y, 255);

    for (let x = 50; x < window.innerWidth - 50; x += 25) {
      p.fill(
        x + y,
        window.innerWidth + window.innerHeight,
        window.innerWidth + window.innerHeight
      );
      p.stroke(
        x + y,
        window.innerWidth + window.innerHeight,
        window.innerWidth + window.innerHeight
      );
      p.rect(x, y, 20, 20);
    }
  }
}

// window.onresize = function () {
//   canvas.size(window.innerWidth, window.innerHeight);
// };

const p = new p5((p: p5) => {
  p.setup = () => setup(p);
  p.draw = () => draw(p);
  return p;
});
