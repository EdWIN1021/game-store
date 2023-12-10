import axios from "axios";

export const rawg = axios.create({
  baseURL: "https://api.rawg.io/api/",
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
  params: {
    key: "9d4196ff72214c4a9f54db81ac13e649",
  },
});
