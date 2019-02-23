const hof = (ex, fn) => {
  return n => fn(n + ex);
};

const plusOneDouble = hof(1, n => n * 2);
console.log(plusOneDouble(4));

