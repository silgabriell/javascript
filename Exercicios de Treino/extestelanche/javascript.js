function confirmar() {
    var pedido = document.getElementById('txtnum')
    var pedidores = (txtnum.value)
    var res = document.getElementById('res')
    var mist = document.getElementsByName('radmist')
    if (pedidores == 2) {
        res.innerText = 'Você escolheu Batata Frita'
    } if (pedidores == 2 && mist[1].checked) {
        res.innerText = 'Você pediu Batata Frita com Queijo Cheddar'
    } else if (pedidores == 3) {
        res.innerText = 'Você escolheu Costela'
    } else if (pedidores < 1 || pedidores > 3) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else if (pedidores == 1 && mist[0].checked) {
        res.innerText = 'Você escolheu Hamburguer com Tomate'
    } else if (pedidores == 1 && mist[1].checked) {
        res.innerText = 'Você escolheu Hamburguer com Queijo Cheddar'
    } else if (pedidores == 1 && mist[2].checked) {
        res.innerText = 'Você escolheu Hamburguer com Bacon'
    }
    res.style.textAlign = 'center'
}
