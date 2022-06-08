const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

function treeSum (tree) {
    let sum = 0;
    tree.forEach((key) => {
        sum += key.v
        if (!key.c) {
            return node.v
        }
        sum += treeSum(key.c)
    })
    return sum
}

console.log(treeSum(tree))

function treeSumIter (tree) {
    let sum = 0;
    let stack =[]
    tree.forEach(node => {
        stack.push(node)
    })
    while(stack.length) {
        let node = stack.pop();
        sum +=node.v
        if (node.c) {
            node.c.forEach(node => stack.push(node))
        }
    }
    return sum
}

console.log(treeSumIter(tree))