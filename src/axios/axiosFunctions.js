import axios from "axios";

export function getAllUsuarios() {
  return axios.get("http://127.0.0.1:8080/usuarios");
}

export function getAllViajes() {
  return axios.get("http://127.0.0.1:8080/viajes");
}

export function getAllItemsViaje() {
  return axios.get("http://127.0.0.1:8080/items");
}
