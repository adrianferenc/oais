const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// require("dotenv").config();
// require("./config/database");

module.exports = { show };
async function show(req, res) {
    try {
        const sequence = sequenceArray = await sequenceScraperLong(req.params.id);
        res.json(sequence);
    } catch (err) {
        res.status(400).json(err);
    }
  }

// HELPER FUNCTIONS
async function sequenceScraperLong(seqId) {
    try {
      const { data } = await axios.get(`http://oeis.org/A${seqId}/a${seqId}.txt`);
      let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
      dataArray = dataArray.filter((elt, idx) => idx % 2 === 1);
      if (dataArray.map((x) => +x).includes(NaN)) throw Error
      return dataArray//.map((x) => +x);
    } catch {
      return sequenceScraperMedium(seqId);
    }
  }
  
  async function sequenceScraperMedium(seqId) {
      try {
        const { data } = await axios.get(`http://oeis.org/A${seqId}/b${seqId}.txt`);
        let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
        dataArray = dataArray.filter((elt, idx) => idx % 2 === 1);
        if (dataArray.map((x) => +x).includes(NaN)) throw Error
        return dataArray//.map((x) => +x);
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


