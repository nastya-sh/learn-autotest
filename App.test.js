/* const puppeteer = require("puppeteer");

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };
  return process.env.NODE_ENV === "debug" ? debugging_mode : {};
};

describe("on page load", () => {
  test("Проверка new project", async () => {
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1000,
        height: 2400
      },
      userAgent: ""
    });
    await page.goto("http://localhost:3000");
    await page.waitFor(2000);

    ///Клик New Project
    await page.click('[data-e2e="new_project"]');
    // await page.waitFor(2000);
    await page.waitForSelector(
      "#root > div > div > form > div:nth-child(4) > button"
    );

    ///Проверка текста кнопки
    const currentResult = await page.$eval(
      "#root > div > div > form > div:nth-child(4) > button",
      elem => elem.textContent
    );
    await expect(currentResult).toEqual("Create");

    ///Проверка URL
    let urlLogin = await page.evaluate(() => location.href);
    await expect(urlLogin).toEqual("http://localhost:3000/create");
    console.log(urlLogin);

    // await page.waitFor(2000);

    // let urlLogin = await page.evaluate(() => location.href);
    // await expect(urlLogin).toEqual("Welcome, user_name");
    // // console.log(urlLogin);

    ///Цвет
    // const currentColor = await page.eval(window.location.pathname);
    // console.log(currentColor);

    ///Получение URL
    // let url = await document.querySelector(".container");
    // "Page protocol is " + window.location.pathname;
    // await page.waitFor(3000);

    ///Проверка URL Login
    // await page.waitForSelector(".");
    // const currentResult1 = await page.$eval(
    //   ".title-page",
    //   elem => elem.textContent
    // );
    // await expect(currentResult1).toEqual("First album");

    browser.close();
  }, 16000);
});
 */

///Работает, но можно переделать, т.к открывает и закрывает браузер
const puppeteer = require("puppeteer");

// const isDebugging = () => {
//   const debugging_mode = {
//     headless: false,
//     slowMo: 250,
//     devtools: true
//   };
//   return process.env.NODE_ENV === "debug" ? debugging_mode : {};
// };

describe("Проверка new project", () => {
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

  test("Проверка new project", async () => {
    await page.goto("http://localhost:3000");
    // await page.waitFor(2000);

    ///Клик New Project
    await page.click('[data-e2e="new_project"]');
    // await page.waitFor(2000);
    await page.waitForSelector(
      "#root > div > div > form > div:nth-child(4) > button"
    );

    ///Проверка текста кнопки
    const currentResult = await page.$eval(
      "#root > div > div > form > div:nth-child(4) > button",
      elem => elem.textContent
    );
    await expect(currentResult).toEqual("Create");

    ///Проверка URL
    let urlLogin = await page.evaluate(() => location.href);
    await expect(urlLogin).toEqual("http://localhost:3000/create");
    // console.log(urlLogin);
  }, 16000);

  test("Проверка signup ", async () => {
    // let browser = await puppeteer.launch({ headless: false });
    // let page = await browser.newPage();

    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2400
    //   },
    //   userAgent: ""
    // });
    await page.goto("http://localhost:3000/");
    // await page.waitFor(2000);

    ///Клик Signup
    await page.click('[data-e2e="sigup"]');
    // await page.waitFor(2000);
    await page.waitForSelector(
      "#root > div > div > form > div:nth-child(6) > button"
    );

    ///Проверка текста кнопки
    const currentResult1 = await page.$eval(
      "#root > div > div > form > div:nth-child(6) > button",
      elem => elem.textContent
    );
    await expect(currentResult1).toEqual("Sign Up");

    ///Проверка URL
    let urlLogin1 = await page.evaluate(() => location.href);
    await expect(urlLogin1).toEqual("http://localhost:3000/signup");

    // browser.close();
  }, 16000);
});
