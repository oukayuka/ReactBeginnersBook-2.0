const multi = (n, m) => n * m;
console.log(multi(2, 4));    // 8

const curriedMulti = n => {
  return m => n * m;
}
console.log(curriedMulti(2)(4));    // 8

const simpleCurriedMulti = n => m => n * m;
console.log(simpleCurriedMulti(2)(4));    // 8

