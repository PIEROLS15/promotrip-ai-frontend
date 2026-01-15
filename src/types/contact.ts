export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface CreateContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ApiSuccessResponse<T> {
  status: "success";
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  status: "error";
  message: string;
  errors?: Record<string, string[]>;
}
