import { sendRequest } from "./send-request";
const BASE_URL = "/api/sequences";

export async function searchResult(query) {
  return sendRequest(`${BASE_URL}/${query}`);
}
