function alphabetPosition(text) {

    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    text = text.toLowerCase()

    console.log(text)

    let returnText =''
    let num = 0

    for (i in text) {
        if (alphabet.includes(text[i])) {
            for (j in alphabet) {
                if (alphabet[j] === text[i]) {
                    num = Number(j) + 1
                    returnText = returnText + num + ' '
                }            
            }
        }
    }
    returnText = returnText.slice(0, -1)
    return returnText
  }

let txt = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(txt))
