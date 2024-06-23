const { request } = require('@playwright/test');

class ApiHelper {
  
  constructor() 
  {
    this.apiContext = null;
    this.apiToken = null;
    this.userEmail = 'anshika@gmail.com';
    this.userPassword = 'Iamking@000';
  }

  async init() 
  {
    this.apiContext = await request.newContext();
  }
  async loginViaAPI() {
    const apiRequest = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
      data: { userEmail: this.userEmail, userPassword: this.userPassword  }
    });
    if (!apiRequest.ok()) {
      throw new Error('Failed to login via API');
    }
    const apiResponse = await apiRequest.json();
    this.apiToken = apiResponse.token;
  }
  getToken() {
    return this.apiToken;
  }
  async goTo(page)                               
  {
    this.page = page; 
    await this.page.goto("https://rahulshettyacademy.com/client");
  }
}

module.exports = {ApiHelper};