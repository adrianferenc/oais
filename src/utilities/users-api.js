import { sendRequest } from "./send-request";

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

export async function changeFavorite(user, sequenceId, method) {
  return sendRequest(`${BASE_URL}/${user._id}`, "PUT", {sequenceId, method});
}

// export async function deleteFavorite(user, sequenceId) {
//   return sendRequest(`${BASE_URL}/${user._id}`, "PUT", {sequenceId});
// }