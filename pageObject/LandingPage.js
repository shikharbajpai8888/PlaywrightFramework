
class LandingPage{
    
    constructor(page)                          
    {
        this.page = page;   
        this.searchbuttonLocator = page.getByRole('textbox', { name: 'search' });
        this.logoLocator = page.locator('div').filter({ hasText: 'AutomationAutomation Practice' }).first();
        this.headerLocator = page.getByRole('button', { name: '   ORDERS' });
        this.yourOrder = page.getByRole('heading', { name: 'Your Orders' });
    }
}
module.exports = {LandingPage};