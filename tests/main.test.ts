import { test, expect } from '@playwright/test';

test.describe('메인 페이지', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('로그인 페이지로 이동할 수 있다.', async ({ page }) => {
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL('/login');
  });
});
