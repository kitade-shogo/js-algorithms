function combine(n, r) {
  let p = 1;
  for (let i = 1; i <= r; i++) {
    p = (p * (n - i + 1)) / i;
  }
  return p;
}

for (let n = 0; n <= 5; n++) {
  let result = "";
  for (let r = 0; r <= n; r++) {
    result += n + "C" + r + "=" + combine(n, r) + " ";
  }
  console.log(result);
}
