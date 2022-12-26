function gerar() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = '' // string vazia para reiniciar a tabuada sempre que colocar um número novo   
        while (c <= 10) {
            let item = document.createElement('option') // cria o elemento 'option' que será usado em HTML
            item.text = `${n} x ${c} = ${n * c}` // faz a multiplicação dos valores
            item.value = `tab${c}` // importante em outras linguagens como php
            tab.appendChild(item) // acessa tab a partir de item
            c++
        }
    }

}



