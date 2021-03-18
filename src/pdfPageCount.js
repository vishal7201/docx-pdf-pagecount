const pdfjsLib = require("pdfjs-dist/es5/build/pdf.js");

const getPDFPageCount = (filePath) => {
  return new Promise((resolve, reject) => {
    pdfjsLib.getDocument(filePath).promise.then(doc => {
      resolve(doc.numPages);
    }).catch(err => reject(err));
  });
};

module.exports = getPDFPageCount;
