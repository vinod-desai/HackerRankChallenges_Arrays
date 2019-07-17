// https://www.hackerrank.com/challenges/ctci-array-left-rotation/

// Complete the rotLeft function below.
function rotLeft(a, d) {
  /* for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a; */
  let b = a.splice(0, d);
  return (a = a.concat(b));
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
