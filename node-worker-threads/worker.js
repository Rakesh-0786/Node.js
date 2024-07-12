const {parentPort}=require("worker_threads");

// Function to calculate factorial

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n * factorial(n-1);
}


// Listen for messages from the parent thread

 parentPort.on('message' ,(n) =>{
    const result=factorial(n);
    parentPort.postMessage(result);
 });