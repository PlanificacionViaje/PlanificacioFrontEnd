import axios from "axios";

// USUARIOS

export function getAllUsuarios() {
  return axios.get("http://127.0.0.1:8080/usuarios");
}

export function getUsuarioById(id) {
  return axios.get(`http://127.0.0.1:8080/usuarios/${id}`);
}

export function postUsuario(formData) {
  return axios.post("http://127.0.0.1:8080/usuarios", formData);
}

export function deleteUsuario(id) {
  return axios.delete(`http://127.0.0.1:8080/usuarios/${id}`);
}

export function getAllViajes() {
  return axios.get("http://127.0.0.1:8080/viajes");
}

export function getAllItemsViaje() {
  return axios.get("http://127.0.0.1:8080/items");
}

export function handleError(error) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
  } else {
    console.log("Error", error.message);
  }
}
