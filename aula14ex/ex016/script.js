function contar() {
    var inicio = document.getElementById('ninicio')
    var fim = document.getElementById('nfim')
    var passo = document.getElementById('npasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerText = 'Contando: '
        var numinicio = Number(ninicio.value) // valor do número do início
        var numfim = Number(nfim.value) // valor do número do fim
        var numpasso = Number(npasso.value) // valor do número do passo
        if (numinicio < numfim) {
            // Contagem Crescente
            for (var c = numinicio; c <= numfim; c += numpasso) { // c = numero do inicio, enquanto c for menor ou igual que o número do fim, c soma o número do passo a seu valor.
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for (var c = numinicio; c >= numfim; c -= numpasso)
                res.innerHTML += ` ${c} \u{1F449}`
        }

    }
    res.innerHTML += `\u{1F3C1}`
}

