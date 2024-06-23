const {LoginPage} = require('./LoginPage');
const {LandingPage} = require('./LandingPage');
const { ApiHelper } = require('./ApiHelper');

class POManager
{
    constructor(page)
{
    this.page = page;
    this.fromLoginPage = new LoginPage(this.page);            
    this.fromLandingPage = new LandingPage(this.page);
    this.fromApiHelper = new ApiHelper(this.page);
}
getLoginPage(){return this.fromLoginPage;}
getLandingPage(){return this.fromLandingPage;}
getApiHelper(){return this.fromApiHelper;}
}
module.exports = {POManager};