// What is asynchronous?

// Asynchronous programming ek aisa paradigm hai jisme ek operation 
// ke complete hone ka wait kiye bina program ke dusre parts ko execute
//  kiya ja sakta hai. Iska matlab hai ki ek operation start hone ke baad program
//   ko block nahi kiya jata, balki wo operation background mein chalti rehti hai aur 
//   jab complete hoti hai to ek callback ya promise ke through result return karti hai. 
//   Is approach se program more responsive aur efficient banta hai, especially jab multiple
//    I/O operations ya slow tasks involved hote hain.


// key points:-
// 1.Callback
// 2.Promises
// 3.Async/Await

// code:

function fetchData(callback){
    setTimeout( () =>{
        callback("Data fetched!");
    },1000);
}

fetchData((message) => {
    console.log(message);
});


