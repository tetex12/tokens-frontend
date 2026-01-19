/**
 * Configuration file for the application
 * Retrieves environment variables and exports configuration values
 */

export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
};
