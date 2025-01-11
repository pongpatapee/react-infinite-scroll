import axios from "axios";

const jikanApiClient = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 1500,
});

// Error handling
jikanApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API error:", error.response || error.message);
    return Promise.reject(error);
  },
);

export default jikanApiClient;
