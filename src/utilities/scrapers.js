const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require("axios");

export async function sequenceScraper(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}/b${seqId}.txt`, {
      headers: {'crossorigin':'true',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
    return data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");;
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

// export async function searchScraper(query) {
//   try {
//     let request = new XMLHttpRequest();
//     request.open("GET", "http://oeis.org/search?q=1,1,2,3,5,8,13&language=english&go=Search", true);
//     request.onload = () => {
//       console.log(request.responseText);
//     };
//     request.send();

//     // const url = new URL("http://oeis.org/search");
//     // const params = { q: query, language: "english", go: "Search" };
//     // url.search = new URLSearchParams(params);
//     // url.href = url.href.replaceAll('%2C',',')
//     // console.log(url.href);
//   } catch (error) {
//     console.log(error);
//   }
// }
