// @ts-check
import { test, expect } from '@playwright/test';
import { getCode2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashBoardPage } from '../pages/DashBoardPage';
import { cleanJobs, getJob } from '../support/redis';


test('invalid login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const user = {
    cpf: '00000014141',
    password: '147258'
  }

  await loginPage.homePage();

  await loginPage.fillCPF(user.cpf);
  await loginPage.fillPassword(user.password);
  await loginPage.fillCode2FA('123456');

  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});

test('login successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashBoardPage = new DashBoardPage(page);

  const user = {
    cpf: '00000014141',
    password: '147258'
  }

  //limpa fila do redis
  await cleanJobs()

  await loginPage.homePage();
  await loginPage.fillCPF(user.cpf);
  await loginPage.fillPassword(user.password);

  //CHECKPOINT
  await page.getByRole('heading', { name: 'Verificação em duas etapas' })
    .waitFor({ timeout: 2000 });

  // chamada para o banco
  //const code = await getCode2FA(user.cpf);
  // chamda para a capturar o codigo na fila do redis
  const code = await getJob();

  await loginPage.fillCode2FA(code);

  await expect(await dashBoardPage.getBalance()).toHaveText('R$ 5.000,00');

});
