import axios from "axios";
import * as config from "./config";

const api = config.API;

export async function getTours() {
  const { data: tours } = await axios.get(`${api}/tours`);
  return tours;
}

export async function getTourPage(id) {
  const { data: tour } = await axios.get(`${api}/tours/${id}`);
  return tour;
}

export async function getCategories(id) {
  const { data: categories } = await axios.get(`${api}/categories`);
  return categories;
}

export async function getCategory(id) {
  const { data: categories } = await axios.get(`${api}/categories/${id}`);
  return categories;
}

export async function getMagazine() {
  const { data: magazine } = await axios.get(`${api}/magazine`);
  return magazine;
}

export async function getMagazinePage(id) {
  const { data: magazine } = await axios.get(`${api}/magazine/${id}`);
  return magazine;
}

export async function getProfile(data) {
  const { data: profile } = await axios.get(`${api}/profile`, data);
  return profile;
}

export async function updateProfile(data, headers) {
  const { data: result } = await axios.put(
    `${api}/profile`,
    { ...data },
    headers
  );
  return result;
}

export async function updateFavorites(data, headers) {
  const { data: result } = await axios.put(
    `${api}/favorites`,
    { ...data },
    headers
  );
  return result;
}

export async function makeReservePayment(data) {
  const { data: reserve } = await axios.post(`${api}/payment/reserve`, data);
  return reserve;
}
export async function verifyReservePayment(data) {
  const { data: credit } = await axios.post(
    `${api}/payment/reserve/verify`,
    data
  );
  return credit;
}

export async function makeCreditPayment(data) {
  const { data: credit } = await axios.post(`${api}/payment/credit`, data);
  return credit;
}
export async function verifyCreditPayment(data) {
  const { data: credit } = await axios.post(
    `${api}/payment/credit/verify`,
    data
  );
  return credit;
}

export async function login(data) {
  const { data: token } = await axios.post(`${api}/login`, data);
  return token;
}
export async function register(data) {
  const { data: token } = await axios.post(`${api}/register`, data);
  return token;
}

export async function search(query) {
  const { data: tours } = await axios.get(
    `${api}/tours/search/${encodeURI(query)}`
  );
  const { data: magazines } = await axios.get(
    `${api}/magazine/search/${encodeURI(query)}`
  );
  return { tours, magazines };
}
