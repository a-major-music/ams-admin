import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

// Create base axios instance
const createApiClient = (baseURL?: string): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: baseURL || process.env.REACT_APP_API_BASE_URL || 'http://localhost:3002',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return apiClient;
};

// Hook to get an authenticated API client
export const useApiClient = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const apiClient = createApiClient();

  // Add request interceptor to include JWT token
  apiClient.interceptors.request.use(
    async (config) => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
          console.error('Failed to get access token:', error);
          // Don't throw here, let the request proceed without token
          // The backend will handle the 401 response
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add response interceptor for error handling
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error('Authentication failed. Please log in again.');
        // The Auth0 provider will handle redirecting to login
      } else if (error.response?.status === 403) {
        console.error('Access forbidden. You may not have permission for this action.');
      }
      return Promise.reject(error);
    }
  );

  return apiClient;
};

// Default export for non-hook usage (though hook is preferred)
export default createApiClient();