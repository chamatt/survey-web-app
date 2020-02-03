const axios = require("axios");

const instance = axios.create({
  baseURL: "https://nextly-survey.herokuapp.com/"
});

export default instance;
