const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  })
  test('choices div id shows up after clicking draw button', async ()=>{
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click()
    const result = driver.findElement(By.id('choices')).isDisplayed()
    expect (await result).toBe(true)
  })
  test('player-duo id shows up after clicking Add to Duo',async()=>{
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const result = driver.findElement(By.id('player-duo')).isDisplayed()
    expect (await result).toBe(true)
  })
});