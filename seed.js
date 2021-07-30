const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
require("dotenv").config();
require("./config/database");

const Sequence = require("./models/sequence");
const start = 1;
const amountToUpdate = 1900;
const lastSequenceId = 346650;
const errors = [];
const time = "";

async function sequenceScraperLong(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}/a${seqId}.txt`);
    let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
    dataArray = dataArray.filter((elt, idx) => idx % 2 === 1);
    return dataArray.map((x) => +x);
  } catch {
    return sequenceScraperMedium(seqId);
  }
}

async function sequenceScraperMedium(seqId) {
    try {
      const { data } = await axios.get(`http://oeis.org/A${seqId}/b${seqId}.txt`);
      let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
      dataArray = dataArray.filter((elt, idx) => idx % 2 === 1);
      return dataArray.map((x) => +x);
    } catch {
      return sequenceScraperShort(seqId);
    }
  }

async function sequenceScraperShort(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}/list`);
    const dom = new JSDOM(data, {
      runScripts: "outside-only",
      resources: "usable",
    });
    const { document } = dom.window;
    const list = document.querySelector("pre");

    return JSON.parse(list.textContent.replace(/\s+/g, "")).map((x) => +x);
  } catch (error) {
    errors.push(seqId);
  }
}

(async function () {
  console.time(time);
   await Sequence.deleteMany({});
  for (let i = start; i < lastSequenceId; i++) {
    let sequenceId = "A" + i.toString().padStart(6, "0");
    let sequenceArray = await sequenceScraperMedium(i.toString().padStart(6, "0"));
    console.log(`${sequenceId} has length ${sequenceArray.length}`);
    sequence = await Sequence.create({ sequenceId, sequenceArray });
  }

  const totalCreated = await Sequence.countDocuments({});

  console.log(`A total of ${amountToUpdate-errors.length} sequences were added.`);
  console.log(`The collection has a total of ${totalCreated} sequences.`);

  if (errors.length === 0) {
    console.log("There were no errors");
  } else {
    console.log(`There were errors at sequences:`);
    errors.forEach((error) => console.log(error));
  }

  console.timeEnd(time);

  process.exit();
})();
