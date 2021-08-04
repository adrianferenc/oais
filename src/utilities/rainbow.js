
//DO NOT TOUCH ANY OF THIS
//TO SEE HOW RAINBOW WORKS, SEE SEQUENCE.JSX


function rgbify(x, t, color1, color2, length) {
  return color1[x] * (1 - length * (t - Math.floor(t * length) / length)) + length * (t - Math.floor(t * length) / length) * color2[x];
}

function gradient(t, color1, color2, length) {
  return `rgb(${rgbify(0, t, color1, color2, length)}, ${rgbify(1, t, color1, color2, length)}, ${rgbify(2, t, color1, color2, length)})`;
}

export default function rainbow(t, palette) {
  return gradient(
    t,
    palette[Math.floor(t * palette.length) % palette.length],
    palette[(Math.floor(t * palette.length) + 1) % palette.length], 
    palette.length
  );
}


