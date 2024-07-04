import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'


test('test', async ({ page }) => {

  const Login = new LoginPage(page);
  
  await Login.gotoLoginPage('https://the-internet.herokuapp.com/login')
  await Login.login('tomsmith','SuperSecretPassword!')
  
});