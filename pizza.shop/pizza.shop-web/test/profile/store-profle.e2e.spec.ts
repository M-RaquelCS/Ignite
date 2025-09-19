import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button').filter({ hasText: /^$/ }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.locator('input[name="name"]').fill('Rocket pizza')
  await page.locator('textarea[name="description"]').fill('Valid Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Perfil atualizado com sucesso!')
  expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
})
