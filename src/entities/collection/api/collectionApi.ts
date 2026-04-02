import { apiClient } from "@shared/api/apiClient";
import type { getAllCollectionsResponse } from "../model/model";

export const collectionApi = {
  getAllCollections: async () => {
    const {data} =
      await apiClient.get<getAllCollectionsResponse>("collections/public");
    return data;
  },
};
