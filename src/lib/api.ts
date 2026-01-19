/**
 * Simple API client for making requests to the backend
 */

import { config } from './config';

const baseURL = config.apiUrl;

/**
 * Handle API response errors
 * @param response - The fetch response object
 * @param endpoint - The API endpoint that was called
 */
async function handleResponse<T>(response: Response, endpoint: string): Promise<T> {
  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText} - ${endpoint}`
    );
  }
  return response.json();
}

/**
 * Make a GET request to the API
 * @param endpoint - The API endpoint to call
 * @returns Promise with the response data
 */
export async function get<T>(endpoint: string): Promise<T> {
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<T>(response, endpoint);
}

/**
 * Make a POST request to the API
 * @param endpoint - The API endpoint to call
 * @param data - The data to send in the request body
 * @returns Promise with the response data
 */
export async function post<T>(endpoint: string, data: unknown): Promise<T> {
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse<T>(response, endpoint);
}

/**
 * Make a PUT request to the API
 * @param endpoint - The API endpoint to call
 * @param data - The data to send in the request body
 * @returns Promise with the response data
 */
export async function put<T>(endpoint: string, data: unknown): Promise<T> {
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse<T>(response, endpoint);
}

/**
 * Make a DELETE request to the API
 * @param endpoint - The API endpoint to call
 * @returns Promise with the response data
 */
export async function del<T>(endpoint: string): Promise<T> {
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<T>(response, endpoint);
}
