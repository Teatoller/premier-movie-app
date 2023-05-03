import axios from "axios";

export default axios.create({
  baseURL: `https://a7b1-41-90-65-248.ngrok-free.app/`,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});
