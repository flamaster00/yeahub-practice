import type { Specialization } from "@entities/specialization";

export interface getAllCollectionsResponse {
  data: Collection[];
  total: number;
  page: number;
  limit: number;
}

export interface Collection {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreatedBy;
  isFree: boolean;
  keywords: string[];
  company: Company;
  questionsCount: number;
  tasksCount: number;
  specializations: Specialization[];
}

export interface CreatedBy {
  id: string;
  username: string;
}

export interface Company {
  id: string;
  title: string;
  legalName: string;
  description: string;
  imageSrc: string;
  inn: string;
  kpp: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreatedBy2;
}

export interface CreatedBy2 {
  id: string;
  username: string;
}

export interface GetAllCollectionsParams {
  page?: number;
  limit?: number;
  titleOrDescriptionSearch?: string;
  specializations?: number[];
  isFree?: boolean;
}

export interface GetCollectionParams {
  id: number
}



