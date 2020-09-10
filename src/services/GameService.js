import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.cheapshark.com/api/1.0/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getDeals(gameTitle) {
    return apiClient.get(`deals?title=${gameTitle}`);
  },

  getStores() {
    return apiClient.get("stores");
  }
};
