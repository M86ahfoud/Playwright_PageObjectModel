exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
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