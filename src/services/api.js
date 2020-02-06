const axios = require("axios");

const instance = axios.create({
  baseURL: "https://chamatt-survey-api.herokuapp.com/"
});
let userStorage = localStorage.getItem("user");

if (userStorage) {
  userStorage = JSON.parse(userStorage);
  instance.defaults.headers.common = {
    Authorization: `Bearer ${userStorage.token}`
  };
}

export default instance;
