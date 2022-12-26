let array = [3, 2, 9, 4, 7, 8]

array[3] = 5 // coloca o número 5 no índice/chave 3 
array.push(1) // coloca o número 1 na última posição
array.sort() // coloca o vetor em ordem crescente
console.log(`O número de índices do vetor é: ${array.length}`) // exibe o valor de quantos índices/chaves possuem no vetor
console.log(`O número 5 está localizado no índice ${array.indexOf(5)}`) // exibe a chave/índice em que o número 5 está localizado


console.log('Agora irá ser exibido o vetor')
for(let pos in array) {
    console.log(`${array[pos]}`) // array[pos] puxa os valores dentro do vetor
}

/* ou
for(let pos = 0;pos < array.length;pos++ ) {
    console.log(`${array[pos]}`) 
}
*/
console.log(`O quinto valor é valor é ${array[4]}`) 