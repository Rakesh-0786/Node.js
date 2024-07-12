// Non-blocking programming mein, ek function ya operation
//  start hota hai aur program uske complete hone ka wait 
// kiye bina apne execution ko continue karta hai. 
// Jab operation complete hota hai, tab result ko handle karne ke liye callback ya promise use hota hai.

// code:

const fs = require('fs');

console.log("Start");

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log("File content:", data);
});

console.log("End");
