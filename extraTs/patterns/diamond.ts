const n1 = Number(process.argv[2]);
function fun(n: number): void {
  let k: number;
  // console.log("function", x);
  let p: string;
  for (let i = 0; i < 2 * n; i++) {
  k = 1;
  p = '';
  for (let j = 0; j < 2 * n - 1; j++) {
  if (i < n) {
  if ((j >= n - 1 - i) && (j <= n - 1 + i) && k) {
  p += '*';
  k = 0;
  }
else {

p += ' ';
k = 1;
}
}
else if (i > n) {
if (j >= i - n && j <= (3 * (n - 1) + 1) - i && k) {
p += '*';
k = 0;
}
else {
p += ' ';
k = 1;
}
}
else {
if (j >= 0 && j < 2 * n - 1 && k) {
p += '*';
k = 0;
}
else {
p += ' ';
k = 1;
}
}

}
console.log(p);
}

}
export default fun;

