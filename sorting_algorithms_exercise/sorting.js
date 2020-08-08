function swapArrayIndexes(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function bubbleSort(arr) {
    let end = arr.length;
    while (end > 1) {
        console.log(arr.join(','));
        for (var i = 0; i < end - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swapArrayIndexes(arr, i, i + 1);
            }
        }
        end--;
    }
    return arr;
}

function selectionSort(arr) {
    let left = 0; // left will be the sorted limit (whats left of left is considered sorted)
    while (left < arr.length - 1) {
        let min = left;
        for (var i = left; i < arr.length; i++) {
            if (arr[min] > arr[i]) {
                min = i;
            }
        }
        if (min != left) {
            swapArrayIndexes(arr, left, min);
        }
        left++;
    }

    return arr;
}

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        // find where to insert i
        let j = i - 1;
        while (j >= 0) {
            if (arr[j] < arr[i]) {
                break;
            }
            j--;
        }
        let removed = arr.splice(i, 1); // remove the "min" number
        arr.splice(j + 1, 0, removed[0]); // insert it into the already sorted part on the left
    }
    return arr;
}

//console.log(bubbleSort([4,5,1,21,2,9,10,15]));
//console.log(bubbleSort([9,-2,0,35,4,-10,22,12]).join(','));
console.log(insertionSort([4, 5, 1, 21, 2, 9, 10, 15]).join(','));