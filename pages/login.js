import selecteur from "../fixture/selecteur.json"
exports.LoginPage = class LoginPage {
    
    constructor(page) {

        this.page = page
        this.username_textbox = page.getByLabel(selecteur.customerLogin.username)
        this.password_textox = page.getByLabel(selecteur.customerLogin.password)
        this.login_button = page.locator(selecteur.customerLogin.login_button)
    }
    async gotoLoginPage(url) {
        await this.page.goto(url);
    }

    async login(usernane, password) {
        await this.username_textbox.fill(usernane)
        await this.password_textox.fill(password)
        await this.login_button.click()
    }
}