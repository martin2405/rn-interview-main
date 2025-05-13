import { getErrorRate } from "@/settings/AppSettings";
import { mockCandidates } from "./mockData";

export type Technology = {
  name: string;
  yearsOfExperience: number;
};

export type Candidate = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  technologies: Technology[];
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type MockApiResponse<T> = Promise<{
  data: T;
  status: number;
}>;

class MockApiError extends Error {
  type: "MockApiError";
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    this.type = "MockApiError";
  }
}

export const isApiError = (error: unknown): error is MockApiError => {
  return error instanceof MockApiError;
};

const mockApiFetch = async <T>(data: T): MockApiResponse<T> => {
  await delay(Math.floor(Math.random() * 1500) + 500);
  const isError = Math.random() < getErrorRate();
  if (isError) {
    throw new MockApiError("Internal Server Error", 500);
  }
  return {
    data,
    status: 200,
  };
};
export async function getCandidates(): MockApiResponse<Candidate[]> {
  return mockApiFetch(mockCandidates);
}
