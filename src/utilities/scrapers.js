const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export async function sequenceScraper(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}/b${seqId}.txt`);
    let dataArray = data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
    dataArray = dataArray.filter((elt,idx)=> idx%2===1);
    return dataArray
  } catch {
    return sequenceScraperShort(seqId);
  }
}

export async function sequenceScraperShort(seqId) {
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
    console.log(error);
  }
}
