function* rangeGenerator(end, start = 0) {
  let n = 0;

  for (let i = start; i < end; i++) {
    n += 1;
    yield i;
  }
}

const gen = rangeGenerator(3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
