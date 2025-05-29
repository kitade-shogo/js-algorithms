function fn(x, a, n) {
  let p = a[n];
  for (let i = n - 1; i >= 0; i--) {
    p = p * x + a[i];
  }
  return p;
}

const a = [1, 2, 3, 4, 5];
for (let x = 1; x <= 5; x++) {
  console.log("fn(" + x + ")=" + fn(x, a, 4));
}
