import rainbow from "./rainbow.js";

const gray1 = [170,170,170];
const gray2 = [190,190,190];
const gray3 = [210,210,210];
const gray4 = [230,230,230];
const gray5 = [250,250,250];

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
