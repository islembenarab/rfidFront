export interface PaginatedResponse<T> {
  content: T[]; // The actual data
  page: {
    size: number; // Number of items per page
    number: number; // Current page number (0-based index)
    totalElements: number; // Total number of items
    totalPages: number; // Total number of pages
  };
}
