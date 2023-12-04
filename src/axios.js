import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081/",
  headers: new Headers({
    "ngrok-skip-browser-warning": "69420",
  }),
});

export default instance;

