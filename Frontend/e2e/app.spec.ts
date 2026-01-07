import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/portfolio/i);
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Check if hero section is visible
    await expect(page.locator('#hero')).toBeVisible();
    
    // Check if projects section is visible
    await expect(page.locator('#projects')).toBeVisible();
    
    // Check if about section is visible
    await expect(page.locator('#about')).toBeVisible();
    
    // Check if contact section is visible
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('404 page works', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByText('Page Not Found')).toBeVisible();
    
    // Click go back home link
    await page.getByRole('link', { name: /go back home/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('contact form validation', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Try to submit empty form
    await page.getByRole('button', { name: /send message/i }).click();
    
    // Check validation errors
    await expect(page.getByText(/name is required/i)).toBeVisible();
    await expect(page.getByText(/email is required/i)).toBeVisible();
  });

  test('dark mode toggle', async ({ page }) => {
    await page.goto('/');
    
    // Check if dark mode toggle exists
    const darkModeToggle = page.locator('button').filter({ hasText: /theme|dark|light/i }).first();
    if (await darkModeToggle.count() > 0) {
      await darkModeToggle.click();
      // Verify dark mode class is applied
      await expect(page.locator('html')).toHaveClass(/dark/);
    }
  });
});
