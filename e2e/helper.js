const puppeteer = require('puppeteer')

export async function openPage (browser, {width = 500, height = 2400} = {}) {
  let page = await browser.newPage()

  page.emulate({
    viewport: {width, height},
    userAgent: '',
  })

  await page.goto('http://localhost:8080/')

  return page
}

export async function createBrowser ({headless = true} = {}) {
  return await puppeteer.launch({
    headless: headless,
  })
}
