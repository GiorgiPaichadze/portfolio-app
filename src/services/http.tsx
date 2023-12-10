export const http = async (endpoint: string, method = 'GET', body: any) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const url = `${baseURL}${endpoint}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store' as RequestCache,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch data');
  }
};
