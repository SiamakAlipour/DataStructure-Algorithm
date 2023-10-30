//Bubble sort

const swap = (arr, j) => {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
};

const bubbleSort = (arr) => {
    // flag is using to stop if bubble sort does not swap anymore that shows it is already sorted
    let flag = true;
    for (let i = 0; i <= arr.length - 1 && flag; i++) {
        flag = false;
        for (let j = 0; j <= arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
                flag = true;
            }
        }
    }
    return arr;
};

