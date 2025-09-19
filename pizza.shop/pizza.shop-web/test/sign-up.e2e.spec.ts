import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page
    .getByRole('textbox', { name: 'Restaurante da esquina' })
    .fill('Pizza Shop')
  await page.getByRole('textbox', { name: 'Fulano de tal' }).fill('John Doe')
  await page
    .getByRole('textbox', { name: 'example@example.com' })
    .fill('jhondoe@example.com')
  await page
    .getByRole('textbox', { name: '(99) 99999-' })
    .fill('(99) 99999-9999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Cadastro concluído com sucesso!')

  expect(toast).toBeVisible()
  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page
    .getByRole('textbox', { name: 'Restaurante da esquina' })
    .fill('Invalid Name')
  await page.getByRole('textbox', { name: 'Fulano de tal' }).fill('John Doe')
  await page
    .getByRole('textbox', { name: 'example@example.com' })
    .fill('jhondoe@example.com')
  await page
    .getByRole('textbox', { name: '(99) 99999-' })
    .fill('(99) 99999-9999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Uh oh! Error ao efetuar ao cadastro.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Ir para login' }).click()
  expect(page.url()).toContain('/sign-in')
})
