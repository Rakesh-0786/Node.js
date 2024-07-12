// OS-Module:-
// 1.The OS module in node.js  is utilized to retrive details about the operating system of a computer.
// 2.It offers methods for communications with the  computer's operating system, including retrieving the hostnamee and the amount of available system memory in bytes.


// OS module:
// os.arch());
// os.freedem());
// os.totalmem());
// os.networkInterfaces());
// os.tmpdir());

// 

const os=require("os");
console.log("CPU Architecture: " +os.arch());

console.log("Free memory: " + os.freemem());

console.log("total memory: " + os.totalmem());

console.log("Network interfaces: " + JSON.stringify(os.networkInterfaces()));

console.log("Os  default temp dir:" + os.tmpdir());

console.log("Endianess: " +os.endianness());

console.log("hostname: " +os.hostname());

console.log("OS type: " +os.type());

console.log("OS platform: " +os.platform());

console.log("OS release: " +os.release());




