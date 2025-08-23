import { test, expect } from '@playwright/test';
import { getCode2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashBoardPage } from '../pages/DashBoardPage';

test('Invalid login', async ({ page }) => {

  const user = {
    cpf: '00000014141',
    password: '147258'
  }

  await loginPage.accessPage()
  await loginPage.getCPF(user.cpf)
  await loginPage.getPassword(user.password)
  await loginPage.getCode('123456')

  //TODO: alter
  await page.waitForTimeout(2000)

  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});

test('Should access the user account', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const dashBoardPage = new DashBoardPage(page)

  const user = {
    cpf: '00000014141',
    password: '147258'
  }

  await loginPage.accessPage()
  await loginPage.getCPF(user.cpf)
  await loginPage.getPassword(user.password)

  //TODO: alter
  await page.waitForTimeout(2000)

  const code = await getCode2FA()
  await loginPage.getCode(code)

  //TODO: alter
  await page.waitForTimeout(2000)

  expect(await dashBoardPage.getBalance()).toHaveText('R$ 5.000,00')
});