import puppeteer from "puppeteer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const resumeHtml = `
  <html>
    <head>
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      <script src="https://unpkg.com/lucide@latest"></script>

    </head>
    <body>${body.html}
    <script>
        lucide.createIcons();
    </script>
    </body>
    <style>
/* Custom print styles for better PDF generation */
@media print {
  body { 
    print-color-adjust: exact; 
  }
  .no-print { 
    display: none; 
  }
}

/* Custom bullet styles */
.custom-bullet {
  position: relative;
  padding-left: 1rem;
}

.custom-bullet::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #374151;
  font-weight: bold;
}
</style>

  </html>`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setContent(resumeHtml, {
    waitUntil: "networkidle0",
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      bottom: "0mm",
      left: "0mm",
      right: "0mm",
    },
  });

  await browser.close();

  // Return the PDF file
  setHeader(event, "Content-Type", "application/pdf");
  setHeader(event, "Content-Disposition", "attachment; filename=resume.pdf");
  return pdfBuffer;
});
