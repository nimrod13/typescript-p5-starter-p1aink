// Import stylesheets
import './style.css';
import p5 = require('p5');

function setup(p: p5) {
  p.createCanvas(500, 450);
  p.frameRate(10);
}

function draw(p: p5) {
  p.line(10, 10, 50, 50);
}

const p = new p5((p: p5) => {
  p.setup = () => setup(p);
  p.draw = () => draw(p);
  return p;
});
