const puppeteer = require("puppeteer");

describe("Проверка функционала", () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1000,
        height: 2400
      },
      userAgent: ""
    });
  });

  afterAll(async () => {
    browser.close();
  });

  const caseFirstTest = [
    {
      desc: "firstTest",
      url: "http://localhost:3000",
      url2: "http://localhost:3000/signup",
      signupSel: '[data-e2e="sigup"]'
    }
  ];
  const caseSecondTest = [
    {
      desc0: "secondTest",
      url3: "http://localhost:3000",
      url4: "http://localhost:3000/signin",
      loginSel: '[data-e2e="login"]'
    }
  ];

  const checkFirstTest = testCase => {
    it(testCase.desc, async () => {
      await page.goto(testCase.url);
      await page.waitFor(2000);
      ///Клик Signup
      await page.click(testCase.signupSel);
      ///Проверка URL Signup
      let urlLogin0 = await page.evaluate(() => location.href);
      await expect(urlLogin0).toEqual(testCase.url2);
    });
  };
  const checkSecondTest = testCase => {
    it(testCase.desc0, async () => {
      await page.goto(testCase.url3);
      await page.waitFor(2000);
      ///Клик Login
      await page.click(testCase.loginSel);
      ///Проверка URL Login
      let urlLogin1 = await page.evaluate(() => location.href);
      await expect(urlLogin1).toEqual(testCase.url4);
    });
  };
  // console.log(caseSecondTest.length);
  checkFirstTest(caseFirstTest[0]);
  checkSecondTest(caseSecondTest[0]);
});
