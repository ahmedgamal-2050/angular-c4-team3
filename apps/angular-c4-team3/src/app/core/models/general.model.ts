export interface ApiListResponse {
  message: string;
  metadata: ApiMetaData;
}

export interface ApiMetaData {
  currentPage: number;
  totalPages: number;
  limit: number;
  totalItems: number;
}