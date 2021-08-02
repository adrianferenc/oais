import rainbow from "./rainbow.js";

export default function colorizer(sequence, x, idx, viewStart, mod = null) {
  if (mod) {
    const start = 0.3 + 0.1123581321345589144233;
    return rainbow(((+x % mod) / mod + start) % 1);
  } else {
    return rainbow(
      ((viewStart + idx) % 100) / Math.min(100, sequence.length) + 0.001
    );
  }
}
