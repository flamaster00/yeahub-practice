import { apiClient } from "@shared/api/apiClient";
import type { getAllCollectionsResponse } from "../model/model";

export const collectionApi = {
  getAllCollections: async (page: number = 1, limit: number = 10) => {
    const {data} =
      await apiClient.get<getAllCollectionsResponse>("collections/public", {
        params: {
          page,
          limit
        }
      });
    return data;
  },
};
