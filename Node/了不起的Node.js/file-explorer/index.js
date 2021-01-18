const fs = require('fs');
fs.readdir(__dirname,function (err,files) {
    // console.log(files);
    for(let item of files) {
        console.log(item)
    }
});