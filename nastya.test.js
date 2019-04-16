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

  //TODO:  const caseFirstTest

  //TODO:  test -> it
  test("Переходы/проверка Url Signup", async () => {
    // TODO: begin
    await page.goto("http://localhost:3000");
    await page.waitFor(2000);
    ///Клик Signup
    await page.click('[data-e2e="sigup"]');
    ///Проверка URL Signup
    let urlLogin0 = await page.evaluate(() => location.href);
    await expect(urlLogin0).toEqual("http://localhost:3000/signup");
    //TODO: end

    ///MyPlan
    await page.click(".brand-logo");
    ///Проверка URL MyPlan
    let urlLogin1 = await page.evaluate(() => location.href);
    await expect(urlLogin1).toEqual("http://localhost:3000/");
    ///Клик Signup
    await page.click('[data-e2e="sigup"]');
    ///Проверка URL Signup
    let urlLogin2 = await page.evaluate(() => location.href);
    await expect(urlLogin2).toEqual("http://localhost:3000/signup");
    ///Клик Login
    await page.click('[data-e2e="login"]');
    ///Проверка URL Login
    let urlLogin3 = await page.evaluate(() => location.href);
    await expect(urlLogin3).toEqual("http://localhost:3000/signin");
    ///Клик Signup
    await page.click('[data-e2e="sigup"]');
    ///Проверка URL Signup
    let urlLogin4 = await page.evaluate(() => location.href);
    await expect(urlLogin4).toEqual("http://localhost:3000/signup");
    ///Клик New Project
    await page.click('[data-e2e="new_project"]');
    ///Проверка URL New Project
    let urlLogin5 = await page.evaluate(() => location.href);
    await expect(urlLogin5).toEqual("http://localhost:3000/create");
    ///Клик Signup
    await page.click('[data-e2e="sigup"]');
    ///Проверка URL Signup
    let urlLogin6 = await page.evaluate(() => location.href);
    await expect(urlLogin6).toEqual("http://localhost:3000/signup");
    ///Log Out
    await page.click(".active");
    ///Проверка URL Log Out
    let urlLogin7 = await page.evaluate(() => location.href);
    await expect(urlLogin7).toEqual("http://localhost:3000/");
    ///Клик Signup
    await page.click('[data-e2e="sigup"]');
    ///Проверка URL Signup
    let urlLogin8 = await page.evaluate(() => location.href);
    await expect(urlLogin8).toEqual("http://localhost:3000/signup");
    ///NN
    await page.click("[data-e2e='user']");
    ///Проверка URL NN
    let urlLogin9 = await page.evaluate(() => location.href);
    await expect(urlLogin9).toEqual("http://localhost:3000/");
  }, 16000);

  //TODO:  checkFirstTest(caseFirstTest[0])
});
