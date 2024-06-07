const {LoginPage} = require('./LoginPage');
const {LandingPage} = require('./LandingPage');

class POManager
{
    constructor(page)
{
    this.page = page;
    this.fromLoginPage = new LoginPage(this.page);            
    this.fromLandingPage = new LandingPage(this.page);
}
getLoginPage(){return this.fromLoginPage;}
getLandingPage(){return this.fromLandingPage;}
}
module.exports = {POManager};