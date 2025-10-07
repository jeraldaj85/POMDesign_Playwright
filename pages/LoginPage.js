exports.LoginPage = 
class LoginPage{
  constructor(page) {
    this.page = page;
    this.loginLink = "//a[@id='login2']";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = '//button[normalize-space()="Log in"]';
  }

  async gotoLoginPage() {
    await this.page.goto('https://demoblaze.com/index.html');
   
  }

  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.locator(this.loginButton).click();
  }
}
