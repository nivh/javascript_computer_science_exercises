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

/**
 * Merge 2 sorted array into one
 * (Helper function for MergeSort)
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function merge (arr1,arr2) {
    let res=[]; //result array
    while (arr1.length > 0 && arr2.length > 0) {
        arr1[0] < arr2[0] ? res.push(arr1.shift()) : res.push(arr2.shift());
    }
    return res.concat(arr1).concat(arr2);
}

/**
 * Recursive function that sorts an array using Merge Sort algorithm
 * uses an helper function: merge
 * @param {Array} arr 
 */
function mergeSort(arr) {
    if (arr.length <= 1){
        // array with 1 element is considered sorted....
        // also we need recursion stop condition, and support an empty array input
        return arr;
    }
    let midIndex=parseInt(arr.length / 2);
    // merge the 2 halves together recursivly
    return merge(mergeSort(arr.slice(0,midIndex)),mergeSort(arr.slice(midIndex)));
}

/**
 * chooses a pivot, and sort the rest of the array into 2 groups:
 * smaller numbers on the left, bigger numbers on the right (not sorted)
 * This is a helper function for quickSort()
 * @param {Array} arr 
 * returns the pivot index in the final position (so the caller would know how to split this array into 2 sub-arrays)
 */
function pivot(arr) {
    if (arr.length<=1) return 0;
    // manually choose first element as pivot (could be more smart)
    let pivotIndex=0;
    for (var i=1; i<arr.length; i++) {
        if (arr[i] < arr[pivotIndex]) {
            // push it to the left of pivot
            arr.splice(0,0,arr.splice(i,1)[0]);
            pivotIndex++;
        }
    }
    return pivotIndex;
}

//console.log(bubbleSort([4,5,1,21,2,9,10,15]));
//console.log(bubbleSort([9,-2,0,35,4,-10,22,12]).join(','));
//console.log(insertionSort([4, 5, 1, 21, 2, 9, 10, 15]).join(','));
// let arr=[4, 5, 1, 21, 2, 9, 10, 15];
// let piv=pivot(arr);
// console.log(`Pivot index=${piv}`);
// console.log(arr.join(','));
// for (var i=0; i<arr.length; i++){
//     console.log(`arr[${i}] = ${arr[i]} and it's type is: ${typeof(arr[i])}`);
// }