const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = { show };
async function show(req, res) {
  try {
    const sequence = await sequenceScraper(req.params.id);
    const description = await sequenceDescription(req.params.id);
    console.log(description);
    res.json({ sequence, description });
  } catch (err) {
    res.status(400).json(err);
  }
}

// async function sequenceScraperLong(seqId) {
//   try {
//     const { data } = await axios.get(`http://oeis.org/A${seqId}/a${seqId}.txt`);
//     let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
//     dataArray = dataArray.filter((elt, idx) => idx % 2 === 1);
//     if (dataArray.map((x) => +x).includes(NaN)) throw Error
//     return dataArray//.map((x) => +x);
//   } catch {
//     return sequenceScraperMedium(seqId);
//   }
// }

// async function sequenceScraperMedium(seqId) {
//     try {
//       const { data } = await axios.get(`http://oeis.org/A${seqId}/b${seqId}.txt`);
//       let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
//       dataArray = dataArray.filter((elt, idx) => idx % 2 === 1);
//       if (dataArray.map((x) => +x).includes(NaN)) throw Error
//       return dataArray//.map((x) => +x);
//     } catch {
//       return sequenceScraper(seqId);
//     }
//   }

async function sequenceScraper(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}/list`);
    const dom = new JSDOM(data, {
      runScripts: "outside-only",
      resources: "usable",
    });
    const { document } = dom.window;
    const list = document.querySelector("pre");

    return JSON.parse(list.textContent.replace(/\s+/g, ""));
  } catch (error) {
    errors.push(seqId);
  }
}

async function sequenceDescription(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}`);
    const dom = new JSDOM(data, {
      runScripts: "outside-only",
      resources: "usable",
    });
    const { document } = dom.window;
    const description = document.querySelectorAll("td");
    return description[12].textContent.trim();
  } catch (error) {
    error.push(seqId);
  }
}
