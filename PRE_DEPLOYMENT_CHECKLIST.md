# Pre-Deployment Checklist

Use this checklist before deploying to production.

## 📋 Code Quality

- [ ] All tests passing (`npm run test:run`)
- [ ] No linting errors (`npm run lint`)
- [ ] Build succeeds without warnings (`npm run build`)
- [ ] Code reviewed and approved
- [ ] TypeScript strict mode enabled
- [ ] No console.log statements in production code
- [ ] All TODO comments addressed or documented

## 🔒 Security

- [ ] No API keys or secrets in code
- [ ] Environment variables properly configured
- [ ] Dependencies up to date (`npm audit`)
- [ ] HTTPS enforced
- [ ] CORS properly configured
- [ ] XSS protection implemented
- [ ] Input validation on all forms
- [ ] Authentication/Authorization tested

## 🎨 UI/UX

- [ ] Responsive design tested on multiple devices
- [ ] Dark mode working correctly
- [ ] All images optimized
- [ ] Loading states implemented
- [ ] Error states handled gracefully
- [ ] 404 page styled and functional
- [ ] Animations smooth and performant
- [ ] Font loading optimized

## ♿ Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] ARIA labels on interactive elements
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] Form labels properly associated
- [ ] Semantic HTML used

## 🚀 Performance

- [ ] Lighthouse score > 90
- [ ] Images lazy loaded
- [ ] Code splitting implemented
- [ ] Bundle size optimized
- [ ] Critical CSS inlined
- [ ] Fonts preloaded
- [ ] Service worker configured (if applicable)
- [ ] CDN configured for static assets

## 🔍 SEO

- [ ] Meta tags configured
- [ ] Open Graph tags added
- [ ] Twitter cards configured
- [ ] robots.txt present
- [ ] sitemap.xml generated
- [ ] Canonical URLs set
- [ ] Schema markup added (if applicable)
- [ ] Page titles unique and descriptive

## 📱 Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🧪 Testing

- [ ] Unit tests passing
- [ ] E2E tests passing
- [ ] Edge cases tested
- [ ] Error scenarios tested
- [ ] Form validation tested
- [ ] API error handling tested
- [ ] Loading states tested
- [ ] Cross-browser tested

## 📄 Documentation

- [ ] README updated
- [ ] API documentation current
- [ ] Environment variables documented
- [ ] Deployment guide reviewed
- [ ] CHANGELOG updated
- [ ] Comments added for complex logic
- [ ] Component props documented

## 🔧 Configuration

- [ ] Environment variables set in hosting platform
- [ ] Build commands configured correctly
- [ ] Domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Redirects configured
- [ ] Error pages set up
- [ ] Analytics configured
- [ ] Error tracking configured

## 🗄️ Database & API (if applicable)

- [ ] Database migrations applied
- [ ] API endpoints tested
- [ ] Rate limiting configured
- [ ] Backup strategy in place
- [ ] Connection pooling optimized
- [ ] Indexes created for queries

## 📊 Monitoring

- [ ] Error tracking setup (e.g., Sentry)
- [ ] Analytics setup (e.g., Google Analytics)
- [ ] Uptime monitoring configured
- [ ] Performance monitoring active
- [ ] Log aggregation configured
- [ ] Alerts set up for critical issues

## 🔄 CI/CD

- [ ] GitHub Actions workflow tested
- [ ] Build passing in CI
- [ ] Tests running in CI
- [ ] Deploy keys configured
- [ ] Environment secrets set
- [ ] Branch protection rules set
- [ ] Auto-deployment configured

## 📝 Legal & Compliance

- [ ] Privacy policy added (if collecting data)
- [ ] Cookie consent implemented (if in EU)
- [ ] Terms of service added (if required)
- [ ] License file included
- [ ] GDPR compliance (if applicable)
- [ ] Accessibility statement added

## 🎯 Final Checks

- [ ] Staging environment tested
- [ ] Demo content removed
- [ ] Test accounts removed
- [ ] Production URLs updated
- [ ] Social media links working
- [ ] Contact form delivers emails
- [ ] All CTAs working
- [ ] Third-party integrations tested

## 📤 Deployment

- [ ] Backup current production (if applicable)
- [ ] Deploy to staging first
- [ ] Smoke test staging environment
- [ ] Deploy to production
- [ ] Verify production deployment
- [ ] Test critical user flows
- [ ] Monitor error rates
- [ ] Monitor performance metrics

## 🎉 Post-Deployment

- [ ] Announce deployment
- [ ] Update documentation
- [ ] Monitor logs for errors
- [ ] Check analytics working
- [ ] Verify all features working
- [ ] Create deployment notes
- [ ] Schedule follow-up review

---

**Last Updated:** Check this list regularly and update as needed.

**Deployment Date:** _______________

**Deployed By:** _______________

**Version:** _______________
