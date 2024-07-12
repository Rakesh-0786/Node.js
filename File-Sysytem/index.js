const fs=require('fs');

// console.log("READ START!");

// // Asynchronous way to read file
// fs.readFile('input.txt', function(err, data)  {
//     if(err){
//         console.log("Error", err);
//         return err;
//     }  
//     console.log('Data: ',data.toString());
//     console.log("READ END");
//     return data;
// });

// console.log("OTHER STUFF");


// synchronous way to read file

// var data=fs.readFileSync('input.txt');
// console.log('Data: ', data.toString());
// console.log("READ END");
// console.log("OTHER STUFF");



// Common Use for File System module:

// 1.Read files
// 2.Write files
// 3.Append files
// 4.Close files
// 5.Delete files

// Read files:
// with the help of asyn and sync ways
// with the help of low level Api
// in low level api there are 2 steps to read the files
// first open and then read
// Read > Open +read;

// code

// const buf= new Buffer(1024);
// fs.open('input.txt','r+', function(err, fd) {
//    if(err) {
//     console.log("Error in Opening file:",err);
//    } 
//    console.log('file open Successfully');
   
//    fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){
//     if(er){
//         console.log("Error in reading file!");
//     }
//     console.log('Data', bytes.toString());
//     console.log("Data: ", buf.slice(0, bytes).toString());
//     fs.close(fd, function(err) {
//         if(err){
//             console.log("Error in closing file");
//         } else{
//             console.log("Success in closing file");
//         }
//     })
//    })

// });



// write data
// write data can also be  used with the asynchronous and synchronous ways

// let do with asynchronous:
// Writing to file with override  , means remove the old data

// fs.writeFile('input.txt', "Hey! This Side From Rakesh!", function(err){
//     if(err){
//         console.log("Error In Writing file!");
//     } else{
//         console.log("Success in Writing file!");
//     }
// });


// // Append to file:
// fs.appendFile("input.txt","--Rakesh Kumar!", "utf8" ,function(err) {
//     if(err){
//         console.log("Error in appending file!");
//     } else {
//         console.log("Success in Appending file!");
//     }
// })


// Deleting file

fs.unlink('input.txt', function(err) {
    if(err) {
        console.log("Error in deleting file!");
    } else {
        console.log("Success in Deleting files!")
    }
});


