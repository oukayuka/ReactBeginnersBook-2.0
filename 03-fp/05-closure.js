const counter = () => {
  let c = 0;
  const increment = () => ++c;

  return increment;
};

const count = counter();
console.log(count(), count(), count());  // 1 2 3

