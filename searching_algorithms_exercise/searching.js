function linearSearch(arr,n) {
    let i=0;
    while (i<arr.length) {
        if (arr[i]===n){
            return i;
        }
    }
    return -1;
}