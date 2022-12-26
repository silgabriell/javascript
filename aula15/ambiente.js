let num = [5, 8, 2, 9, 3]
num.push(1) // num.push() coloca o número 1 na última posição
num.sort()//  num.sort()  coloca em ordem crescente
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na chave ${pos}`)
}