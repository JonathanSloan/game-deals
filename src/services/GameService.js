import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.cheapshark.com/api/1.0/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
import { actions, store } from "../store/store";

export default {
  // Search for game
  async findDeals(gameTitle) {
    const requestUrl = `deals?title=${gameTitle}&storeID=${store.selectedStores}`;
    const results = await apiClient.get(requestUrl);
    return results.data;
  },

  // Get top 10 deals of the day and append store data
  async getDeals() {
    const stores = await apiClient.get("stores");
    const deals = await apiClient.get(`deals?pageSize=10`);

    const dealData = deals.data.map(result => ({
      ...result,
      store: stores.data.find(store => store.storeID === result.storeID)
    }));
    return dealData;
  },

  // Get store data
  getStores() {
    return apiClient.get("stores");
  }
};
