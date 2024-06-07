
class LoginPage{
    
    constructor(page)                            //put all your locator from one page here
    {
        this.page = page;   
        this.usernameLocator = page.getByPlaceholder('email@example.com');
        this.passwordLocator = page.getByPlaceholder('enter your passsword');
        this.loginButtonLocator = page.getByRole('button', { name: 'Login' });
    }
    async goTo()                                 //method to launch URL
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
        console.log(await this.page.title());
    }
    async validLogin(username, password)         //method to login
    {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginButtonLocator.click();
    }
}
module.exports = {LoginPage};