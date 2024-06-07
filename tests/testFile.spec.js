const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageObject/POManager');
const testdata = JSON.parse(JSON.stringify(require ('../testData/LoansData.json')));

for(const dataset of testdata){
test(`@Sanity _TC001_Dataset-${dataset.ds}_RS client page_Login`,  async ({page}) =>
{
    const fromPOManager = new POManager(page);                             
    const fromLoginPage = fromPOManager.getLoginPage();            
    const fromLandingPage = fromPOManager.getLandingPage(); 

    await fromLoginPage.goTo();                                            
    await fromLoginPage.validLogin(dataset.username, dataset.password); 
    
    //Assertion 1: Validate the Page Title - try to keep one assertion in one test
    await expect (page).toHaveTitle("Let's Shop");
   
    //Assertion 2: Validate the test on header field - try to keep one assertion in one test
    await expect (fromLandingPage.headerLocator).toContainText(' ORDERS');
    
    //Assertion 3: Validate Page Logo - try to keep one assertion in one test
    expect (await fromLandingPage.logoLocator.screenshot()).toMatchSnapshot(`originalscreen1.png`);
});
}






























// /**Working***************************************************************/
// test('TC1_RS_Login_Error Message_Title value_wait',  async ({page}) =>
// {
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 

// const userName = page.getByLabel('Username:');
// const passWord = page.getByLabel('Password:');
// const checkBox  = page.getByLabel('I Agree to the terms and');
// const signIn = page.getByRole('button', { name: 'Sign In' });
// const errMsg = page.locator("[style*='block']");  //*** CSS is used here as error messaghe will stay for few secs only
// const cardTitle = page.locator(".card-body a");

// console.log(await page.title());
// await userName.fill("rahulshetty");
// await passWord.fill("learning");
// await checkBox.check();
// await signIn.click();
// console.log(await errMsg.textContent());
// await expect (errMsg).toContainText('Incorrect');

// await userName.fill("");
// await userName.fill("rahulshettyacademy");
// await passWord.fill("learning");
// await checkBox.check();
// await signIn.click();

// await page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop');
// console.log(await page.title());
// await  expect (page).toHaveTitle('ProtoCommerce');
// });

// /**Working***************************************************************/
// test('TC2_RS_Login_List of all Products',  async ({page}) =>
// {
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 

// const userName = page.getByLabel('Username:');
// const passWord = page.getByLabel('Password:');
// const checkBox  = page.getByLabel('I Agree to the terms and');
// const signIn = page.getByRole('button', { name: 'Sign In' });
// const cardTitle = page.locator(".card-body a");

// console.log(await page.title());
// await userName.fill("rahulshettyacademy");
// await passWord.fill("learning");
// await checkBox.check();
// await signIn.click();

// await cardTitle.first().waitFor();
// console.log(await cardTitle.allTextContents()); //Capture all items in an array
// console.log(await cardTitle.first().textContent()+ "first"); //there is no second; only first and last
// console.log(await cardTitle.last().textContent())+ "last";
// console.log(await cardTitle.nth(0).textContent()+ "nth"); //creates an array and selects number in braces
// console.log(await cardTitle.nth(1).textContent()+ "nth");
// console.log(await cardTitle.nth(3).textContent()+ "nth");
// });

// /**Working*********************************************************/
// test('TC3_RS_SimpleDropDown_CheckBox_RadioButton_PopMessages_pause_assersion not available',  async ({page}) =>
// {
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 

// const documentLink = page.getByRole('link', { name: 'Free Access to InterviewQues/' });
// const dropDown = page.getByRole('combobox');
// const radioBtn = page.locator(".radiotextsty");
// const okayBtn = page.getByRole('button', { name: 'Okay' });
// const terms = page.locator("#terms");

// await dropDown.selectOption("consult");   //simple dropdown also known as select
// await page.pause();    //pause just for debugging
// await radioBtn.last().click();
// await okayBtn.click();   //WebBased PopUp
// await expect(radioBtn.last()).toBeChecked();
// await terms.click();
// await expect(terms.last()).toBeChecked();
// await terms.uncheck();  
// expect( await terms.isChecked()).toBeFalsy(); //there is no assertion for uncheck
// await expect (documentLink).toHaveAttribute("class", "blinkingText");
// });

// /**Working*********************************************************/
// test('TC4_RS_Just to show Browser Context',  async ({browser}) =>
// {
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
// });

// /**Working*********************************************************/
// test('TC5_Child windows handle_Promise', async ({browser}) =>
// {
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

// const documentLink = page.getByRole('link', { name: 'Free Access to InterviewQues/' });
// const userName = page.getByLabel('Username:');

// //system will run all statements in loop until all statements given inside promise are executed successfully
// const [Page1] = await Promise.all([
//     context.waitForEvent('page'),
//     documentLink.click(),
// ])

// const text = await Page1.locator(".red").textContent();
// console.log(text);
// const arrayText = text.split("@");
// const domain = arrayText[1].split(" ")[0];
// console.log(domain);

// await userName.fill(domain);
// await page.pause();
// })



