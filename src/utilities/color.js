import rainbow from "./rainbow.js";

const red = [212, 14, 13];
const orange = [329, 104, 25];
const yellow = [235, 180, 36];
const green = [73, 195, 158];
const blue = [128, 210, 222];
const indigo = [95, 112, 143];
const violet = [63, 15, 63];
const ultraviolet = [229, 22, 112];

const roygbiv = [red, orange, yellow, green, blue, indigo, violet, ultraviolet];

export default function colorizer(sequence, x, idx, mod = null) {
  if (mod) {
    const start = 0.3 + 0.1123581321345589144233;
    return rainbow(((+x % mod) / mod + start) % 1, roygbiv);
  } else {
    return rainbow(
      ((idx) % 100) / Math.min(100, sequence.length) + 0.001,
      roygbiv
    );
  }
}
