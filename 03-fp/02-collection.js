const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.map(n => n * 2));                 // [ 2, 4, 6, 8, 10, 12, 14, 16 ]
console.log(arr.filter(n => n % 3 === 0));        // [ 3, 6 ]
console.log(arr.find(n => n > 4));                // 5
console.log(arr.every(n => n !== 0));             // true
console.log(arr.some(n => n > 8));                // false
console.log(arr.includes(5));                     // true
console.log(arr.reduce((n, m) => n + m));         // 36
console.log(arr.sort((n, m) => n > m ? -1 : 1));  // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
