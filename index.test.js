const puppeteer = require("puppeteer")

describe("H1 Text", () => {
  test("title loads correctly", async () => {
    let browser = await puppeteer.launch({
      headless: true
    })
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 1280,
        height: 800
      },
      userAgent: ""
    })

    await page.goto("https://developer.mozilla.org/en-US/docs/Web/JavaScript")

    await page.waitForSelector("h1", {
      visible: true
    })

    const html = await page.$eval("h1", (e) => e.innerHTML)
    expect(html).toBe("JavaScript")

    browser.close()
  }, 16000)
})