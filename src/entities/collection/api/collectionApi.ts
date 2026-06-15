import { apiClient } from "@shared/api/apiClient";

import type {
  Collection,
  GetAllCollectionsParams,
  getAllCollectionsResponse,
} from "../model/model";

export const collectionApi = {
  getAllCollections: async (params: GetAllCollectionsParams) => {
    const { data } = await apiClient.get<getAllCollectionsResponse>(
      "collections/public",
      { params },
    );
    return data;
  },

  getCollectionById: async ( id : number) => {
    const { data } = await apiClient.get<Collection>(
      `/collections/${id}/public`,
    );
    return data
  },
};
