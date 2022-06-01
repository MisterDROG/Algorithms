let arrayOne = [13,11,5,21,7,4,15,2]
let count = 0

function fastSort(arr) {
    if (arr.length <=1) {
        return arr
    }
    let less = []
    let more = []
    let inter = Math.floor(arr.length / 2);
    let middle = arr[inter]
    for (let i = 0; i < arr.length; i++) {
        count = count + 1
        if (i === inter) {
            continue
        } 
        if (arr[i] > middle) {
            more.push(arr[i])
        } else {
            less.push(arr[i])
        }   
    }
    return [...fastSort(less), middle, ...fastSort(more)]
}   

console.log(fastSort(arrayOne))
console.log(count)