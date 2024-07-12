// File System:-
/*.Node.js is a platform that uses Chrome's V8 javaScript engine,
allowing developers to use javaScript to create server-side applications that generates dynamics content for web-clients.
What sets Node.js apart are its event-driven and non-blocking I/O features.
.Node.js includes a built-in module called FS(file System) that allows users to manage files
by creating , reading, deleting, developers can call the require() method, which
provides access to POSIX function wrapped by Node.js  to enable both synchronous and asynchronous file system
operations, depending on the user's requirements.


var fs=require('fs');



Synchronous and Asynchronous approach:

.The Synchronous approach involves blocking functions that wait for each operation
to complete before executing the next one.
This means that a command won't execute until the query has finished executing and all the resuts from 
previous commands have been obtained.

.On the other hand, the asynchronous approach involves non-blocking functions that executes all the operations at once,
without waiting for each operation to complete.
The results of each operations are handled when they become available, 
and each command is executed after the previous one.
If the operations involves querying large amounts of data from a database, the Asynchronous approach is recommended.

 */