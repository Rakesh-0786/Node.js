// Blocking methods execute synchronously and non-blocking methods execute asynchronously.


//  Yeh do techniques hain jo batati hain ki ek program kaise ek task complete hone ka wait karta hai ya nahi karta hai.


// blocking

// Blocking programming mein, ek function ya operation complete hone tak CPU ko control me rakhta hai aur dusre tasks ko execute nahi hone deta. Matlab jab tak ek task complete nahi hota, program ka execution stop ho jata hai.

// code:
const fs = require('fs');

console.log("Start");

try {
  fs.writeFileSync('output.txt', 'Hello, World!', 'utf-8');
  console.log("File 'output.txt' created successfully.");
} catch (err) {
  console.error('Error creating file:', err.message);
}

console.log("End");
