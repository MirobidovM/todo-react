export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key) => localStorage.getItem(key);

export const clear = () => {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie = '';
};
