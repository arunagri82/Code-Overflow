const bubbleSort = (array) => {
  let swaps;

  do {
    swaps = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temporary = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temporary;
        swaps = true;
      }
    }
  } while (swaps);

  return array;
};

const arr = [2, 13, 5, 10, 8, 9];
console.log(`Unsorted list: ${arr}`);
console.log(`Sorted list: ${bubbleSort(arr)}`);
