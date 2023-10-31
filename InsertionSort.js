const insertionSort = (arr) => {
    for (let i = 2; i < arr.length; i++) {
        let y = arr[i];
        let j = i - 1;
        // we can use sentinel instead of j>=0;
        while (y < arr[j] /* && j >= 0*/) {
            console.log(j);
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = y;
    }
    return arr.slice(1, arr.length - 1);
};

const array = [Number.NEGATIVE_INFINITY, 1, 5, 3, 12, 99, 80, 71, 75];

const sortedArray = insertionSort(array);

console.table(sortedArray);

