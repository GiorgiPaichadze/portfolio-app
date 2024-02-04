import axios, { AxiosRequestConfig } from 'axios';

export const http = async (endpoint: string, method = 'GET', body?: any) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const url = `${baseURL}${endpoint}`;

  const config: AxiosRequestConfig = {
    method,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    data: body,
  };

  try {
    const response = await axios(url, config);

    if (response.status !== 200) {
      throw new Error(`HTTP request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error: any) {
    console.error('Error:', error);
    throw new Error(`Failed to fetch data. ${error.message || ''}`);
  }
};
