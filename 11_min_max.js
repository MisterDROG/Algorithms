console.log('start')

let array = [1,6,-8,-1,15,9,0]

console.log(array)

let max = array.reduce((prev, cur) => {
    if (prev > cur) {
        return prev
    }
    return cur
}, 0)


console.log(max)

let min = array.reduce((prev, cur) => {
    if (prev > cur) {
        return cur
    }
    return prev
}, 0)


console.log(min)