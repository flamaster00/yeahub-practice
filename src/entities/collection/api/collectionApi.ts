import { apiClient } from "@shared/api/apiClient";
import type {
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
};
