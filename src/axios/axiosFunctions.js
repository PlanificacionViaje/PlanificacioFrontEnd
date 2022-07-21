import axios from "axios";

const url = "http://10.1.12.94:8080";

//
// USUARIOS
//
export function getAllUsuarios() {
  return axios.get(url + "/usuarios");
}

export function getUsuarioById(id) {
  return axios.get(url + `/usuarios/${id}`);
}

export function postUsuario(formData) {
  return axios.post(url + "/usuarios", formData);
}

export function putUsuario(formData) {
  return axios.put(url + "/usuarios", formData);
}

export function deleteUsuario(id) {
  return axios.delete(url + `/usuarios/${id}`);
}

//
// VIAJES
//
export function getAllViajes() {
  return axios.get(url + "/viajes");
}

export function getAllViajesFromUsuario(id) {
  return axios.get(url + `/usuarios/${id}/viajes`);
}

export function getViajeById(id) {
  return axios.get(url + `/viajes/${id}`);
}

export function postViaje(formData) {
  return axios.post(url + "/viajes", formData);
}

export function putViaje(formData) {
  return axios.put(url + "/viajes", formData);
}

export function deleteViaje(id) {
  return axios.delete(url + `/viajes/${id}`);
}

//
// ITEMS VIAJE
//
export function getAllItemsViaje() {
  return axios.get(url + "/items");
}

export function getAllItemsViajeFromViaje(id) {
  return axios.get(url + `/viajes/${id}/items`);
}

export function getItemsViajeById(id) {
  return axios.get(url + `/items/${id}`);
}

export function postItemsViaje(formData) {
  return axios.post(url + "/items", formData);
}

export function putItemsViaje(formData) {
  return axios.put(url + "/items", formData);
}

export function deleteItemsViaje(id) {
  return axios.delete(url + `/items/${id}`);
}

//
// HANDLE ERROR RESPONSE
//
export function handleError(error) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
  } else {
    console.log("Error", error.message);
  }
}
