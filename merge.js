function merge(arrA, arrB) {
    let i = 0;
    let j = 0;
    const out = []
    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] > arrB[j]) {
            out.push(arrB[j])
            j++;
        } else {
            out.push(arrA[i])
            i++
        }
    }
    while (i < arrA.length) {
        out.push(arrA[i])
        i++
    }
    while (j < arrB.length) {
        out.push(arrB[j])
        j++
    }

    return out
}

function mergeSort(arr) { 
    //base case
    if(arr.length <= 1){
        return arr
    }

    //split the arr
    let mid = Math.floor(arr.length/2);

    const arr1 = mergeSort(arr.slice(0, mid))
    const arr2 = mergeSort(arr.slice(mid))

    //take the split arrs and sort them in mergeSort
    return merge(arr1, arr2)
}

module.exports = { merge, mergeSort };