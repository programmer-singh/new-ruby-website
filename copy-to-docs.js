// include fs-extra package
var fs = require("fs-extra");
 
var source = 'dist/new-ruby-website';
var destination = 'docs/';
 fs.emptyDir('docs',err => {
    if(err) {
        console.log(err);
    }
    console.log('Deleted Old Stuff');
 });
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});