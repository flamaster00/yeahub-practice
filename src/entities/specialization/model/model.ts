export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: string;
    username: string;
  };
}

export interface GetAllSpecializationsResponse {
  total: number;
  page: number;
  limit: number;
  data: Specialization[];
}
