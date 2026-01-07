/**
 * Environment configuration utility
 * Provides type-safe access to environment variables
 */

interface EnvironmentConfig {
  apiUrl: string;
  appName: string;
  appDescription: string;
  enableAnalytics: boolean;
  enableErrorTracking: boolean;
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
}

/**
 * Get environment variable with fallback
 */
function getEnvVar(key: string, defaultValue: string = ''): string {
  return import.meta.env[key] ?? defaultValue;
}

/**
 * Get boolean environment variable
 */
function getBooleanEnvVar(key: string, defaultValue: boolean = false): boolean {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  return value === 'true' || value === '1';
}

/**
 * Environment configuration object
 */
export const env: EnvironmentConfig = {
  apiUrl: getEnvVar('VITE_API_URL', '/api'),
  appName: getEnvVar('VITE_APP_NAME', 'Portfolio Project'),
  appDescription: getEnvVar(
    'VITE_APP_DESCRIPTION',
    'A modern portfolio showcasing projects, skills, and experience'
  ),
  enableAnalytics: getBooleanEnvVar('VITE_ENABLE_ANALYTICS', false),
  enableErrorTracking: getBooleanEnvVar('VITE_ENABLE_ERROR_TRACKING', false),
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  isTest: import.meta.env.MODE === 'test',
};

/**
 * Validate required environment variables
 */
export function validateEnv(): void {
  const requiredVars: string[] = [
    // Add your required env vars here
    // 'VITE_API_URL',
  ];

  const missing = requiredVars.filter(
    (key) => !import.meta.env[key]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}

/**
 * Log environment info (only in development)
 */
export function logEnvInfo(): void {
  if (env.isDevelopment) {
    console.log('Environment:', import.meta.env.MODE);
    console.log('API URL:', env.apiUrl);
    console.log('App Name:', env.appName);
  }
}

export default env;
