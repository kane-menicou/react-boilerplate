import puppeteer from 'puppeteer'

describe('End To End tests', () => {
  let browser
  let page

  afterAll(() => {
    browser.close()
  })

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    })
  })

  beforeEach(async () => {
    page = await browser.newPage()

    page.emulate({
      viewport: {width: 500, height: 2400},
      userAgent: '',
    })
  })

  it('should work', async () => {
    await page.goto('http://localhost:8080/')

    const header = await page.evaluate(
      () => document.querySelector('.header').textContent,
    )

    expect(header).toBe('React App')
  }, 16000)
})
