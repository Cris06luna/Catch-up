/**
 * Production environment configuration for the application.
 *
 * This file contains settings and variables specific to the production environment.
 * It is used to configure the application during production deployment.
 */
export const environment = {
  production: true,
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewEndpoint: '/top-headlines',
  newsProviderSourceEndPointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_NEWS_PROVIDER_API_KEY',
  logoProviderApiBaseUrl: 'https://img.logo.dev/',
  logoProviderPublishableKey: 'YOUR_LOGO_PROVIDER_PUBLISHABLE_KEY'
};
