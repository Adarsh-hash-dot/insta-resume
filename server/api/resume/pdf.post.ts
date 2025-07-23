import puppeteer from 'puppeteer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resumeHtml = `<html><head><script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script></head><body>${body.html}</body></html>`

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  await page.setContent(resumeHtml, {
    waitUntil: 'networkidle0',
  })

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '15mm',
      right: '15mm',
    },
  })

  await browser.close()

  // Return the PDF file
  setHeader(event, 'Content-Type', 'application/pdf')
  setHeader(event, 'Content-Disposition', 'attachment; filename=resume.pdf')
  return pdfBuffer
})
