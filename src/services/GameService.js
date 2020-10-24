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
  // Search for game
  async findDeals(gameTitle) {
    const results = await apiClient.get(`deals?title=${gameTitle}`);
    return results.data;
  },

  // Get top 10 deals of the day
  async getDeals() {
    const deals = await apiClient.get(`deals?pageSize=10`);
    return deals.data;
  },

  // Get store data
  getStores() {
    return apiClient.get("stores");
  }
};
