const mas = [0,1,2,3,4,5,6,7,8,9,10]

function binarySearch(massive, item) {
    let start = 0
    let end = massive.length - 1
    console.log('start', start)
    console.log('end', end)
    middle = Math.floor(massive.length / 2)
    console.log(middle)
    console.log(massive[middle])
    while (start <= end) {
        middle = Math.floor((start+end) / 2)
        console.log('start', start)
        console.log('middle', middle)
        console.log('end', end)
        if (massive[middle] === item) {
            return middle
        } else if (massive[middle] < item) {
            start = middle + 1
        } else if (massive[middle] > item) {
            end = middle - 1
        }
    }
    return null
}

console.log(binarySearch(mas, 2))