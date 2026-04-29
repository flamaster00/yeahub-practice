import { apiClient } from "@shared/api/apiClient";
import type { GetAllSpecializationsResponse } from "../model/model";

export const specializationApi = {
  getAllSpecializations: async (page: number = 1, limit: number = 10, authorId: string = '', title: string = '') => {
    const {data} =
      await apiClient.get<GetAllSpecializationsResponse>("specializations", {
        params: {
          page,
          limit,
          authorId,
          title
        }
      });
    return data;
  },
};
