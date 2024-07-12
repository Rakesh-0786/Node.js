// Async /await keywords promises ke uppar syntactic sugar provide karta hain, jisse assynchronous code ko likhna or smjhna easy ho jata hai.
//  The async keywords are transform a regular javaScript function into an
// asynchronous function, causing it to return a Promise.
// The await keyword is used inside an async function to pause its execution 
// and wait for a promise to Resolve before continuing.


// code:-

function fetchData() {
    return new Promise((res,rej) =>{
        setTimeout(() =>{
            res("Data Fetched!!");
        },1000);
    });
}

async function fetchDataAsync() {
    try{
        const message=await fetchData();
        console.log(message);
    } catch(error) {
        console.log(error);
    }
}

fetchDataAsync();