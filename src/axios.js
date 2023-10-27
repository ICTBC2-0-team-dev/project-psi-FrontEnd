import axios from "axios";

const instance = axios.create({
  baseURL: "https://1885e186a057233529c8ad1532e48916.serveo.net",
  headers: new Headers({
    "ngrok-skip-browser-warning": "69420",
  }),
});

export default instance;

