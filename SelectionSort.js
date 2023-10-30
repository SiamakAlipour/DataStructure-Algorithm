const selectionSort = (a) => {
    for (let i = a.length; i > 0; i--) {
        let max = a[0];
        let index = 0;
        for (let j = 1; j <= i; j++) {
            if (a[j] > max) {
                max = a[j];
                index = j;
            }
        }
        // prevent swap element with itself [1,3,2,5]
        if (i != index) {
            a[index] = a[i];
            a[i] = max;
        }
    }
    return a;
};
console.log(selectionSort([19, 50, 2, 1]));
