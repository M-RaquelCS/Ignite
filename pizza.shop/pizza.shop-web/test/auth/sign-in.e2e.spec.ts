import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page
    .getByRole('textbox', { name: 'example@example.com' })
    .fill('jhondoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()
  const toast = page.getByText('Link de autenticação enviado!')

  expect(toast).toBeVisible()
  await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page
    .getByRole('textbox', { name: 'example@example.com' })
    .fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()
  const toast = page.getByText('Uh oh! Credenciais inválidas')

  expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Ir para cadastro' }).click()
  expect(page.url()).toContain('/sign-up')
})
