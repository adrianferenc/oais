const red = [212, 14, 13];
const orange = [329, 104, 25];
const yellow = [235, 180, 36];
const green = [73, 195, 158];
const blue = [128, 210, 222];
const indigo = [95, 112, 143];
const violet = [63, 15, 63];
const ultraviolet = [229, 22, 112];

const roygbiv = [red, orange, yellow, green, blue, indigo, violet, ultraviolet];





//DO NOT TOUCH ANY OF THIS


//TO SEE HOW RAINBOW WORKS, SEE SEQUENCE.JSX
const length = roygbiv.length;

function rgbify(x, t, color1, color2) {
  return color1[x] * (1 - length * (t - Math.floor(t * length) / length)) + length * (t - Math.floor(t * length) / length) * color2[x]
    ;
}

function gradient(t, color1, color2) {
  return `rgb(${rgbify(0, t, color1, color2)}, ${rgbify(1, t, color1, color2)}, ${rgbify(2, t, color1, color2)})`;
}

export default function rainbow(t) {
  return gradient(
    t,
    roygbiv[Math.floor(t * length) % length],
    roygbiv[(Math.floor(t * length) + 1) % length]
  );
}

