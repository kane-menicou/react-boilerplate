import { createBrowser, openPage } from './helper'

let browser

describe('End To End tests', () => {
  beforeAll(async () => {
    browser = await createBrowser()
  })

  afterAll(() => {
    browser.close()
  })

  it('should work', async () => {
    const page = await openPage(browser)

    await page.waitForSelector('.title')

    const html = await page.$eval('.title', e => e.innerHTML)

    expect(html).toBe('React App')
  }, 16000)
})
