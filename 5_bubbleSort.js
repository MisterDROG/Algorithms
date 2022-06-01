let arrayOne = [13,11,5,21,7,4,15,2]
let count = 0

function bubbleSort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j+1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            count = count + 1
        }
    }
    return arr
}

console.log(bubbleSort(arrayOne))
console.log(count)