# docx-pdf-pagecount
A npm module to page count of a docx or pdf file.

## Installation
npm install docx-pdf-pagecount

## Usage

```
const getPageCount = require('docx-pdf-pagecount');

getPageCount('E:/sample/document/aa/test.docx')
  .then(pages => {
    console.log(pages);
  })
  .catch((err) => {
    console.log(err);
  });
  

getPageCount('E:/sample/document/vb.pdf')
  .then(pages => {
    console.log(pages);
  })
  .catch((err) => {
    console.log(err);
  });
  
```
