// what is Thread?
// A thread ek lightweight process hai jo ek program ke instructions ko sequentially execute karta hai. Threads ke through, ek process ke andar multiple paths of execution ho sakte hain.


// Single-Threaded
// Single-threaded programming model mein ek program mein sirf ek hi thread hota hai jo sequentially instructions ko execute karta hai. Matlab ek samay par ek hi kaam (task) perform ho sakta hai.

// code :
console.log("Start");
setTimeout(() =>{
    console.log("Timer Done!!");
},1000);

console.log("End");







// Multi-Threaded
// Multi-threaded programming model mein
//  ek program ke andar multiple threads hoti hain jo concurrently (ek hi samay par) tasks ko perform kar sakti hain. 
//  Har thread ek separate path of execution hota hai.


