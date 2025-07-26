// composables/usePdfGenerator.ts

export const usePdfGenerator = () => {
  const generatePdf = async (elementId: string, filename = 'document.pdf', apiPath = '/api/resume/pdf') => {
    const html = document.getElementById(elementId)?.outerHTML

    if (!html) {
      console.error(`Element with ID "${elementId}" not found.`)
      return
    }

    try {
      const res = await fetch(apiPath, {
        method: 'POST',
        body: JSON.stringify({ html }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error(`PDF generation failed: ${res.statusText}`)
      }

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = filename
      link.click()

      URL.revokeObjectURL(url) // cleanup
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return { generatePdf }
}
