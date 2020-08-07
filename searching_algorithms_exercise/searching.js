function linearSearch(arr, n) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === n) {
            return i;
        }
        i++;
    }
    return -1;
}

function linearSearchRecursive(arr, n) {
    if (arr.length === 0) {
        return -1
    }
    let x = arr.pop();
    if (x === n) {
        return arr.length;
    }
    let f = linearSearchRecursive(arr, n);
    if (f === -1) {
        return -1;
    }
    return f;
}

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    while (left <= right) {
        mid = parseInt((right + left) / 2);
        if (n === arr[mid]) {
            return mid;
        }
        if (n > arr[mid]) {
            // the number is bigger then the middle, search to the right
            left = mid + 1;
        } else {
            // the number is smaller then the middle, search to the left
            right = mid - 1;
        }
    }
    // did not find
    return -1;
}

function binarySearchRecursive (arr,n) {
    //console.log(arr);
    let l=arr.length;
    if (l===0) {
        return -1
    }
    let mid=parseInt(l / 2);
    if (n===arr[mid]) {
        return mid;
    }
    if (n>arr[mid]) {
        let right=binarySearchRecursive(arr.slice(mid+1), n);
        if (right===-1) {
            return -1;
        }
        return mid+right+1;
    } else {
        // n < arr[mid]
        let left=binarySearchRecursive(arr.slice(0,mid), n);
        if (left===-1) {
            return -1;
        }
        return mid-left-1;
    }
}

module.exports = { linearSearch, linearSearchRecursive, binarySearch, binarySearchRecursive };

console.log(binarySearchRecursive([1,2],1));