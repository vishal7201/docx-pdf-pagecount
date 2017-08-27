const path = require('path');
const docxPageCount = require('./docxPageCount');
const pdfPageCount = require('./pdfPageCount');


const getPageCount = (filePath) => {
  const extension = path.extname(filePath).toLowerCase();
  if(extension === '.pdf') {
    return pdfPageCount(filePath);
  } else if(extension === '.docx') {
    return docxPageCount(filePath);
  } else {
    return new Promise((resolve, reject) => reject('extension not supported'));
  }
}

module.exports = getPageCount;
