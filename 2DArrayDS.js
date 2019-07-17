// https://www.hackerrank.com/challenges/2d-array/

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const n = arr[0].length;
  const m = arr.length;
  let total = -Infinity;

  for (let x = 0; x < m - 2; x++) {
    for (let y = 0; y < n - 2; y++) {
      // sum the top of hourglass
      let sum = arr[x][y] + arr[x][y + 1] + arr[x][y + 2];

      // get the middle of hourglass
      sum += arr[x + 1][y + 1];

      // sum the bottom of hourglass
      sum += arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];

      if (total < sum) {
        total = sum;
      }
    }
  }

  return total;
}

arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(arr1));
