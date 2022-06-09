function cash(fn) {
    const cash = {}
    return function(n) {
        if (cash[n]) {
            console.log('взято из кеша', cash[n])
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result
        console.log('посчитала функция', result)
        return result
    }

}

console.log('start')

function factorial(n) {
    let result = 1;
    for (let i=n; i > 1; i = i - 1) {
        result = result*i
    } 
    return result
}

const cashFactorial = cash(factorial)

cashFactorial(5)
cashFactorial(2)
cashFactorial(5)
cashFactorial(2)
cashFactorial(1)