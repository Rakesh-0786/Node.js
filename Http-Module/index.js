// What is Http?:-
// Http stands for HyperText Transfer protocol.
// It is a protocol used for transmitting data over the internet.
// HTTP defines how clients and servers communicates with each other
// and how requests and response should be formatted and transmitted.
// It is the foundation of data communication for the World Wide Web or the Internet.



// Http module in nodeJS:-

/* .Node's http module is an integral component that facilitates various 
aspects of the HTTP protocal.To use the Http module, start by creating  a new file named server.js 
then import the http module using the require function.
.Second , create an HTTP server using the createServer() method of the http object.
.Finally, the incomming HTTP request is monitored on port.

*/

const http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the response header
    if (req.url == '/') {
        res.write("<h1>Hello Node.js From Rakesh Kumar!</h1>");
    } else if (req.url === '/about') {
        res.write('<h1>About Page!</h1>');
    }
    res.end(); // End the response
});

server.listen(5000);

console.log('The HTTP server is running on port 5000');


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write("<h1>Hello Node.js From Rakesh Kumar!</h1>");
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>About Page!</h1>');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('<h1>404 Not Found</h1>');
//     }
//     res.end(); // End the response
// });

// server.listen(5000, () => {
//     console.log('The HTTP server is running on port 5000');
// });


