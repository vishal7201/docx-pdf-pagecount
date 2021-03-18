const fs = require("fs");
const parseString = require("xml2js").parseString;
const toString = require("stream-to-string");
const unzipper = require("unzipper");

const getDocxPageCount = filePath => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) reject("Error in reading file");
    fs.createReadStream(filePath)
      .pipe(unzipper.Parse())
      .on("entry", entry => {
        if (entry.path == "docProps/app.xml") {
          toString(entry).then(xml => {
            parseString(xml, function (err, result) {
              if (result["Properties"]["Pages"][0]) {
                resolve(result["Properties"]["Pages"][0]);
              } else {
                reject("Cannot find page count");
              }
            });
          });
        } else {
          entry.autodrain();
        }
      });
  });
};

module.exports = getDocxPageCount;
