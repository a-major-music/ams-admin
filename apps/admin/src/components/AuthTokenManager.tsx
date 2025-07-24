import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

/**
 * Component that manages Auth0 token state and configures API client
 * This runs automatically when the user is authenticated
 */
export const AuthTokenManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    const configureApiClient = async () => {
      if (isAuthenticated && !isLoading) {
        try {
          const token = await getAccessTokenSilently();
          
          // Configure default axios instance with token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Log successful authentication for debugging
          console.log('Auth0 token configured for API client');
          if (user?.email) {
            console.log(`Authenticated as: ${user.email}`);
          }
          
        } catch (error) {
          console.error('Failed to get access token:', error);
          // Clear any existing token
          delete axios.defaults.headers.common['Authorization'];
        }
      } else if (!isAuthenticated && !isLoading) {
        // Clear token when not authenticated
        delete axios.defaults.headers.common['Authorization'];
      }
    };

    configureApiClient();
  }, [isAuthenticated, isLoading, getAccessTokenSilently, user]);

  // Don't render children until authentication state is determined
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};