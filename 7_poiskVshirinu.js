const graph = {}

graph.a = ['c','b']
graph.b = ['f']
graph.c = ['d','e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function poiskVshirinu(graph, start, end) {
    console.log('start', start, 'end', end)
    let queue = []
    let currentPoint = start
    queue.push(...graph[currentPoint])
    let keys = Object.keys(graph)
    console.log(keys)

    while (currentPoint !== end) {
        console.log('ИТЕРАЦИЯ')
        console.log('очередь до', queue)

        currentPoint = queue.shift()
        if (!keys.includes(currentPoint)) {
            graph[currentPoint]=[]
        }
        queue.push(...graph[currentPoint])

        console.log('очередь после', queue)
        
        if (queue.length == 0) {
            return false
        }
    }
    return true
}

console.log(poiskVshirinu(graph, 'a', 'g'))