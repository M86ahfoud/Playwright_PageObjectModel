import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'
import url from '../../fixture/url.json'
import account from '../../fixture/account.json'

test('test', async ({ page }) => {

  const Login = new LoginPage(page);
  
  await Login.gotoLoginPage(url.urlSite)
  await Login.login(account.customer.username, account.customer.password)
  
});