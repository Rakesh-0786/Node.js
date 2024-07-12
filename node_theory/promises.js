// Promise ek object hai jo future mein value return karega , ya to success(resolve) ya failure(rejected) ke form mein.

// const { resolve } = require("path");

// Example:

function fetchData(){
    return new Promise((Resolve, reject) => {
        setTimeout( () => {
            Resolve("Data Fetched!");
        },1000);
    });
}

fetchData().then(message =>{
    console.log(message);
}).catch((error) =>{
    console.log(error);
});