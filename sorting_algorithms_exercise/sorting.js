function swapArrayIndexes(arr,i1,i2) {
    let temp=arr[i1];
    arr[i1]=arr[i2];
    arr[i2]=temp;
}

function bubbleSort(arr) {
    let end=arr.length;
    while (end>0) {
        for (i=0; i<end; i++) {
            if (arr[i] > arr[i+1]) {
                swapArrayIndexes(arr,i,i+1);
            }
        }
        end--;
    }
}