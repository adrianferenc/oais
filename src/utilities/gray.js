import rainbow from "./rainbow.js";

const gray1 = [170,170,170];
const gray2 = [187,187,187];
const gray3 = [204,204,204];
const gray4 = [221,221,221];
const gray5 = [238,238,238];

const grays = [gray1,gray2,gray3,gray4,gray5, gray4, gray3, gray2, gray1];

export default function grayizer(sequence, x, idx, viewStart, mod = null) {
  if (mod) {
    const start = 0.3 + 0.1123581321345589144233;
    return rainbow(((+x % mod) / mod + start) % 1, grays);
  } else {
    return rainbow(
      ((viewStart + idx) % 100) / Math.min(50, sequence.length) + 0.001,
      grays
    );
  }
}
