// include fs-extra package
const fs = require("fs-extra");
const replace = require("replace-in-file");

var source = 'dist/new-ruby-website';
var destination = 'docs/';

const replaceOpts = {
    files: "docs/index.html",
    from: 'base href="/"',
    to: 'base href="./"'
}

fs.emptyDir('docs', err => {
    if (err) {
        console.log(err);
    }
    console.log('Deleted Old Stuff');
});

// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err) {
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')

    // replace content of docs/index.html after copy complete
    const results = replace.sync(replaceOpts);
    console.log(results);
});