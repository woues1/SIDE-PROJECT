/**
 * Application constants
 * Centralized place for all app-wide constants
 */

// Application metadata
export const APP_NAME = 'Portfolio Project';
export const APP_DESCRIPTION = 'A modern portfolio showcasing projects, skills, and experience';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '*',
} as const;

// Navigation sections (for scrolling)
export const SECTIONS = {
  HERO: 'hero',
  PROJECTS: 'projects',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const;

// Animation durations (milliseconds)
export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  SCROLL_DURATION: 500,
} as const;

// Form validation
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MIN_MESSAGE_LENGTH: 10,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  USER: 'user',
  THEME: 'darkMode',
  LANGUAGE: 'language',
} as const;

// Theme
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// API endpoints (relative to base URL)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/admin/login',
    LOGOUT: '/admin/logout',
    VALIDATE: '/admin/token/validate',
  },
  PROJECTS: '/projects',
  SKILLS: '/skills',
  CONTACT: '/contact',
} as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Your message has been sent successfully!',
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logout successful!',
  DATA_SAVED: 'Data saved successfully!',
} as const;

// SEO defaults
export const SEO_DEFAULTS = {
  TITLE: APP_NAME,
  DESCRIPTION: APP_DESCRIPTION,
  KEYWORDS: 'portfolio, web development, react, typescript',
  AUTHOR: 'Your Name',
  OG_IMAGE: '/og-image.jpg',
} as const;

// Social media links (update with your actual links)
// TODO: Replace with actual social media URLs or configure via environment variables
export const SOCIAL_LINKS = {
  GITHUB: import.meta.env.VITE_GITHUB_URL || 'https://github.com/yourusername',
  LINKEDIN: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
  TWITTER: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/yourusername',
  EMAIL: import.meta.env.VITE_EMAIL || 'mailto:your.email@example.com',
} as const;

// Accessibility
export const A11Y = {
  SKIP_TO_CONTENT: 'skip-to-content',
  MAIN_CONTENT: 'main-content',
} as const;
