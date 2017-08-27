const fs = require('fs');
const path = require('path')
const unzip = require('unzip')
const parseString = require('xml2js').parseString;
const toString = require('stream-to-string')

const getDocxPageCount = (filePath) => {
  return new Promise((resolve, reject) => {
    let tempFilePath =  path.join(__dirname, Date.now() + '.zip');
    let rs = fs.createReadStream(filePath);
    rs.once('error', (err) => {
      console.log(err);
      return reject("Error in reading file");
    });
    rs.once('end', () => {
      fs.createReadStream(tempFilePath)
        .pipe(unzip.Parse())
        .on('entry', function(entry) {
          if (entry.path == 'docProps/app.xml') {
            toString(entry).then(function(xml) {
              parseString(xml, function (err, result) {
                if(result['Properties']['Pages'][0]){
                  fs.unlink(tempFilePath,() => {});
                  return resolve(result['Properties']['Pages'][0])
                } else {
                  fs.unlink(tempFilePath,() => {});
                  return reject('Cannot find page count');
                }
            });
            });
          } else {
            entry.autodrain();
          }
        });
    });
    rs.pipe(fs.createWriteStream(tempFilePath));
  });
}

module.exports = getDocxPageCount;
