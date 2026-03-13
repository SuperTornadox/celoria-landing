import { expect, test } from '@playwright/test'

test.describe('Screenshots Showcase', () => {
  test('switches feature panel and updates main slide', async ({ page }) => {
    await page.goto('/')

    const section = page.locator('#screenshots')
    await expect(section).toBeVisible()

    await section.getByRole('button', { name: /Customer Management/i }).first().click()
    await expect(section.getByRole('heading', { name: 'Customer Management' })).toBeVisible()
    await expect(section.getByText('Client timeline in one profile')).toBeVisible()
  })
})
