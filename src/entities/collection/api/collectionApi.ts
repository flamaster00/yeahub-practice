import { apiClient } from "@shared/api/apiClient";
import type { getAllCollectionsResponse } from "../model/model";

export const collectionApi = {
  getAllCollections: async (page: number = 1, limit: number = 10, titleOrDescriptionSearch?: string, specializations?: number[], isFree?: boolean) => {
    const {data} =
      await apiClient.get<getAllCollectionsResponse>("collections/public", {
        params: {
          page,
          limit,
          titleOrDescriptionSearch,
          specializations,
          isFree
        }
      });
    return data;
  },
};
