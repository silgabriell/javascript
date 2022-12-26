function converter() {
    var valortxt = document.getElementById('valortxt')
    var res = document.getElementById('res')
    if (valortxt.value.length == 0) {
        alert('Por favor, insira um valor')
    } else {
        var valor = Number(valortxt.value)
        var valorEmDolarNumerico = parseFloat(valor)
        var converter = valorEmDolarNumerico * 5.286
        var resultado = converter.toFixed(2)
    }
    res.innerText = 'O valor em Real é R$ ' + resultado
}