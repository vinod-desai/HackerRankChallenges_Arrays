// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  // We know that the array will be sequential.
  // So in order to calculate the finalPosition of each value we need to calculate
  // the min value of the array. Next, see the finalPosition calculation.

  let minValue = Math.min(...arr);
  let finalPosition = 0;
  let buffer = 0;
  let numberSwaps = 0;
  let i = 0;

  // Process every value in the array.
  while (i < arr.length) {
    //Calculate the final finalPosition of each value.

    finalPosition = arr[i] - minValue;

    // Check wether the value is in its correct finalPosition. If not, throw (swap) it to its rigthfull position.

    if (finalPosition != i) {
      buffer = arr[i];
      arr[i] = arr[finalPosition];
      arr[finalPosition] = buffer;
      numberSwaps++;
    } else {
      // If the value is already in its final position, go to the next value.
      i++;
    }
  }

  return numberSwaps;
}
