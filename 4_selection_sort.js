let arrayOne = [13,11,5,21,7,4,15,2]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j= i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[j];
                array[j] = array[i]
                array[i] = temp
            }
            count = count + 1
        }
    }
    return array
}

console.log(selectionSort(arrayOne))
console.log(count)

let arrayOne2 = [13,11,5,21,7,4,15,2]
let count2 = 0

function selectionSort2(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j= i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count2 = count2 + 1
        }
        let temp = array[i];
        array[i] = array[indexMin]
        array[indexMin] = temp
    }
    return array
}

console.log(selectionSort2(arrayOne2))
console.log(count2)