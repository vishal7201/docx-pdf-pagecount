# docx-pdf-pagecount
A npm module to page count of a docx or pdf file.

## Installation
npm install aws-sns-sms

## Usage

```
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
