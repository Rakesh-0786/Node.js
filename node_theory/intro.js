// node.js single threaded hai ki multithreaded?
// Node.js fundamentally single-threaded architecture par based hai, lekin ye asynchronous aur non-blocking I/O operations ko handle karne ke liye designed hai. Yahaan kuch details hain jo Node.js ke threading model ko explain karti hain:


// Single-Threaded Event Loop
// Event Loop: Node.js ka main feature iska event loop hai. Event loop ek single thread par run hota hai aur asynchronous callbacks ko manage karta hai. Event loop ke through hi Node.js I/O operations ko asynchronously handle karta hai.
// Non-Blocking I/O: Node.js ka I/O model non-blocking hai, jo multiple I/O operations ko ek hi thread par concurrently handle karne ki capability deta hai. Jab ek I/O operation start hota hai, Node.js us operation ko event loop mein queue kar deta hai aur apne execution ko continue rakhta hai.


// node js is a open source crosse platform or JavaScript Run-time environment hai jo 
// single threaded architecture par based hai, 
// and it designed to handle the asynchrounous or non-blocking operations.



// Worker Threads
// Worker Threads: Node.js 10.5.0 ke baad se Worker Threads
//  module introduce hua, jo multithreading ki capability deta hai. 
//  Worker threads complex computation-heavy tasks ko alag threads mein run
//   karne ki facility provide karte hain, bina event loop ko block kiye.
// Use Case: Worker threads ko tab use kiya ja sakta hai jab aapko CPU-intensive tasks
//  perform karne hote hain jo event loop ko block kar sakte hain. Is tarah ke tasks ko alag worker 
//  threads mein offload kar diya jata hai.



// Libuv Library
// Libuv: Node.js backend mein libuv library ka use karta hai jo asynchronous I/O operations ko handle karti hai. Libuv internals mein thread pool ka use karti hai kuch specific I/O tasks jaise file system operations, DNS lookups, etc. ko handle karne ke liye.
// Thread Pool: Libuv library 4 threads ka default pool use karti hai, jise zarurat ke hisaab se customize kiya ja sakta hai. Ye threads Node.js ke single-threaded nature ke upar parallel I/O operations ko execute karne ki facility provide karte hain.


// Summary
// Single-Threaded: Node.js ka main event loop single-threaded hai.
// Asynchronous: Asynchronous aur non-blocking I/O operations ke through concurrency achieve karta hai.
// Worker Threads: Complex CPU-intensive tasks ke liye multithreading support deta hai.
// Libuv Thread Pool: Libuv library ke through kuch I/O operations ko thread pool mein execute karta hai.

