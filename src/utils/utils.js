export function setLocalStorageSession(key, value, timetoexpire) {
  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
      expires: new Date().getTime() + timetoexpire,
    })
  );
}

export function getLocalStorageSession(key) {
  return JSON.parse(localStorage.getItem(key));
}
