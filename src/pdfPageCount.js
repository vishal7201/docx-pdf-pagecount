let PDFParser = require('pdf2json');
let pdfParser = new PDFParser();

const getPDFPageCount = (filePath) => {
  return new Promise((resolve, reject) => {
    pdfParser.on('pdfParser_dataReady', function(data) {
        const pages = (pdfParser.PDFJS && pdfParser.PDFJS.pdfDocument && pdfParser.PDFJS.pdfDocument.numPages) || data.formImage.Pages.length;
        return resolve(pages);
    });
    pdfParser.on("pdfParser_dataError", err => {
      return reject(err);
    });
    pdfParser.loadPDF(filePath);
  });
}

module.exports = getPDFPageCount;
