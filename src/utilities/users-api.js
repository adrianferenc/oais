import { getToken } from "./users-service";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require("axios");

const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

async function sendRequest(url, method = "GET", payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}

export async function getSequence(seqId) {
  try {
    const { data } = await axios.get(`http://oeis.org/A${seqId}/b${seqId}.txt`);

    return data.replace(/\n/gm, ` `).replace(/\s+/gm, ` `).split(" ");
  } catch {
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
}
