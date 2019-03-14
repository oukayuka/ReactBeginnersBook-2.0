const counterMaker = (initialCount = 0) => {
  let c = initialCount;
  const increment = () => c++;

  return increment;
};

const count = counterMaker(1);
console.log(count(), count(), count());  // 1 2 3

