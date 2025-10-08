import { pdfToPng } from 'pdf-to-img';
import fs from 'fs';

async function convertPDF() {
  const pdfPath = './public/bonepi.pdf';

  try {
    const document = await pdfToPng(pdfPath, {
      outputFolder: './public',
      outputFileMask: 'mochinut-icon',
      pagesToProcess: [1],
      strictPagesToProcess: false,
      verbosityLevel: 0,
      scale: 2.0
    });

    console.log('✅ Converted bonepi.pdf to mochinut-icon.png');
    console.log(`Generated ${document.length} image(s)`);
  } catch (error) {
    console.error('Error converting PDF:', error);
  }
}

convertPDF();
