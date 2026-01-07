# Known Issues and Notes

## Vitest Version

The current version of Vitest (4.0.16) is newer than the typical recommendation for Vite 5.x projects. While all tests are currently passing, you may consider downgrading to Vitest 2.x if you encounter any compatibility issues:

```bash
npm install -D vitest@^2.0.0 @vitest/ui@^2.0.0
```

The current setup works correctly, but this note is here for transparency about the version mismatch.

## Contact Form API Integration

The contact form in `src/components/Contact.tsx` currently uses a simulated submission for demonstration purposes. Before deploying to production, you should:

1. Replace the simulated API call with your actual backend endpoint
2. Or integrate with a form service like:
   - [Formspree](https://formspree.io/)
   - [EmailJS](https://www.emailjs.com/)
   - [Web3Forms](https://web3forms.com/)
   - [GetForm](https://getform.io/)

See the TODO comment in the `handleSubmit` function for implementation guidance.

## Social Media Links

The social media links in `src/utils/constants.ts` use placeholder values by default. Before deployment:

1. Update the URLs directly in the constants file, or
2. Set them as environment variables:
   - `VITE_GITHUB_URL`
   - `VITE_LINKEDIN_URL`
   - `VITE_TWITTER_URL`
   - `VITE_EMAIL`

## Environment Variables

Make sure to create a `.env` file based on `.env.example` and configure all necessary variables before deployment. Never commit `.env` files to version control.

## Browser Compatibility

The application uses modern JavaScript features and requires:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

For older browser support, consider adding polyfills via Vite's legacy plugin.

## Performance Optimization

For production deployment, ensure:
- Images are optimized (WebP format recommended)
- Bundle analyzer is run to check for large dependencies
- Code splitting is properly configured
- Lazy loading is implemented for routes

## Testing in CI/CD

The GitHub Actions workflow installs only Chromium for Playwright tests to reduce CI time. For comprehensive testing, you may want to enable Firefox and WebKit browsers by modifying `.github/workflows/main.yml`.

## Backend API

This frontend expects a backend API at `/api`. Make sure to:
- Configure the proxy in development (already set in `vite.config.ts`)
- Set the correct `VITE_API_URL` for production
- Implement CORS properly on your backend
- Handle authentication tokens securely

## Accessibility

While WCAG AA compliance has been prioritized, a full accessibility audit with tools like:
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

is recommended before public release.

## Security

Remember to:
- Never expose API keys or secrets
- Implement rate limiting on your backend
- Use HTTPS in production
- Keep dependencies updated regularly
- Run `npm audit` periodically

## Updates

Last updated: 2026-01-07
