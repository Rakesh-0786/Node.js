// main.js
const { Worker } = require('worker_threads');

function runFactorialWorker(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js');

    // Listen for messages from the worker
    worker.on('message', resolve);

    // Listen for errors from the worker
    worker.on('error', reject);

    // Listen for the worker to exit
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });

    // Send the number to the worker
    worker.postMessage(n);
  });
}

// Use the worker to calculate the factorial
runFactorialWorker(10)
  .then(result => console.log(`Factorial: ${result}`))
  .catch(err => console.error(err));
