# Deployment Guide

This document provides instructions for deploying the portfolio application to various platforms.

## Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Git

## Environment Variables

Copy `.env.example` to `.env` and configure the following variables:

```bash
VITE_API_URL=your-api-url
VITE_APP_NAME=Your Portfolio Name
VITE_APP_DESCRIPTION=Your Portfolio Description
```

## Building for Production

```bash
cd Frontend
npm install
npm run build
```

The production build will be created in the `dist/` directory.

## Deployment Options

### Option 1: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd Frontend
vercel --prod
```

4. Configure build settings in Vercel dashboard:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
cd Frontend
netlify deploy --prod --dir=dist
```

4. Configure build settings in Netlify dashboard:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Option 3: GitHub Pages

1. Add homepage to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## Continuous Deployment

The project includes a GitHub Actions workflow (`.github/workflows/main.yml`) that:

1. Runs tests on every push and pull request
2. Builds the application
3. Deploys to preview environment for pull requests
4. Deploys to production on merge to main

### Setting up Automated Deployment

1. Add deployment secrets to your GitHub repository:
   - `VERCEL_TOKEN` or `NETLIFY_AUTH_TOKEN`
   - Any other required environment variables

2. Update the workflow file with your deployment commands

3. Push to main branch to trigger deployment

## Performance Optimization

The build is optimized with:

- Code splitting
- Tree shaking
- Minification
- Compression
- Asset optimization

## Monitoring

Consider adding:

- Error tracking (e.g., Sentry)
- Analytics (e.g., Google Analytics, Plausible)
- Performance monitoring (e.g., Lighthouse CI)

## Rollback

To rollback a deployment:

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
Use the Netlify dashboard to restore a previous deployment.

## Support

For issues or questions, please open an issue in the GitHub repository.
