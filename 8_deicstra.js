const graph = {}

graph.a = {c: 1, b: 2}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}


function deicstra(graph, start, end) {
    let visitedPoints = []
    let distances = {}
    let keys = Object.keys(graph)
    let keysStart = Object.keys(graph[start])

    for (let i in keys) {
        distances[keys[i]] = 10000
    }
    for (let i in keysStart) {
        distances[keysStart[i]] = graph[start][keysStart[i]]
    }
    delete distances[start]

    while (visitedPoints.length !== Object.keys(distances).length) {
        let lowestNode = getLowestNode(distances, visitedPoints)
        console.log('lowestNode',lowestNode)
        Object.keys(graph[lowestNode]).forEach((key) =>{
            let distance = distances[lowestNode] + graph[lowestNode][key]
            console.log('key',key)
            console.log('distance',distance)
            console.log('distances[key] до' ,distances[key])
            if (distances[key] > distance) {
                distances[key] = distance
            }
            console.log('distances[key] после',distances[key])
        })
        visitedPoints.push(lowestNode);
    }
    return distances;  

}

function getLowestNode(distances, visitedPoints) {
    let lowestDist = 10000
    let lowestNode;
    Object.keys(distances).forEach((key) => {
        if (distances[key] < lowestDist && !visitedPoints.includes(key)){
            lowestDist = distances[key];
            lowestNode = key;
        }
    })
    return lowestNode;
}

console.log(deicstra(graph, 'a', 'g'))