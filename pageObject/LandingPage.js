
class LandingPage{
    
    constructor(page)                          
    {
        this.page = page;   
        this.searchbuttonLocator = page.getByRole('textbox', { name: 'search' });
        this.logoLocator = page.locator('div').filter({ hasText: 'AutomationAutomation Practice' }).first();
        this.headerLocator = page.getByText('Showing 8 results |');
    }
}
module.exports = {LandingPage};