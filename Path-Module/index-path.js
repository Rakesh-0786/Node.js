/*NodeJs path module:-
1.Node.js provides you with the path module that allows
 you to interact with file paths easily..
2.The path module has many useful properties and methods to access
and manipulate paths in the file system.
 */

const path=require("path");

// console.log(path.sep);  //(in mac and linux show the  /)
// console.log(process.env.PATH);  /* ; (windows) : (mac, linux) */

// console.log(path.delimiter); /*;  */


// Handy Path methods:

//.the following shows some handy methods of the path module that you probably use very often.


const filePath='/public_html/home/index.html';
const currentFilePath=__filename;
console.log('currentFilePath >',currentFilePath);

// path.basename(path, [,ext])
let basename=path.basename(currentFilePath);
console.log('basename >',basename);

let basenameWithoutExt=path.basename(currentFilePath, '.js');
console.log('basenameWithoutExt',basenameWithoutExt);


// path.dirname(path)
let dirname=path.dirname(currentFilePath);
console.log('dirname >',dirname);


// path.extname(path)
console.log('ext >',path.extname(currentFilePath));


// path.isAbsolute(path)
// absolutefile= c:,d:, \
//relativefile= ./ , ../ , '

console.log('isAbsolute > ', path.isAbsolute(currentFilePath));
console.log('isAbsolute > ', path.isAbsolute('/index.js'));
console.log('isAbsolute > ', path.isAbsolute('./index.js'));
console.log('isAbsolute > ', path.isAbsolute('../index.js'));



// path.join(...path)
let pathToFile=path.format({
    dir:'/public_html/home',
    base:'index.html'
});
console.log('pathToFile >' ,pathToFile);

let pathToDir=path.join('/home','js' ,'dist','index.js');
console.log('pathToDir >',pathToDir);


// path.normalize(path)
console.log('normalise >',path.normalize('//home//user//js'));


// path.parse(path)
console.log('parse >' , path.parse(currentFilePath));

// path.relative(from, to)
console.log('relative path >', path.relative('home/user/config', '/home/user/js'));

// path.resolve(...path)
console.log('resolve >', path.resolve());
