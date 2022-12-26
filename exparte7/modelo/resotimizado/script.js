var numero = document.getElementById("numero")
var listanum = []
var lista = document.getElementById("addnum")
var res = document.getElementById("res")


function inLista(n, l) {
  if(l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}



function adiciona() {
  
  
  
  if(numero.value.length == 0 || numero.value < 1 || numero.value > 100 || inLista(numero.value, listanum) == true) {
    alert("Valor inválido ou já encontrado na lista.")
  } else {
    var num = Number(numero.value)
    var option = document.createElement('option')
    option.text = `Valor ${num} adicionado.`
    lista.appendChild(option)
    listanum.push(num)

    
  }
numero.value = ''
numero.focus()

}

function finaliza() {
  for(var c = 0; c < listanum.length; c++) {
    var quantnum = c
  }
  var maior = listanum[0]
  for(var c = 1; c < listanum.length; c++) {
    if(listanum[c] > maior) {
      maior = listanum[c]
    }
  }
  var menor = listanum[0]
  for(var c = 1; c < listanum.length; c++) {
    if(listanum[c] < menor) {
      menor = listanum[c]
    }
  }
  var soma = 0
  for(var c = 0; c < listanum.length; c++) {
     soma += listanum[c]
  }
  var media = soma/5

  res.innerHTML = ''
  res.innerHTML += `<p>Ao todo temos ${listanum.length} números cadastrados.</p>`
  res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
  res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
  res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
  res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}