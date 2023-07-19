let num = document.getElementById('txtnum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true        
    } else {
        return false
    }
} 

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ` `
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }

    num.value = ` `
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert(`Adicione valores antes de finalizar.`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores){
            if (valores[posicao] > maior){
                maior = valores[posicao]
            }
            if (valores[posicao] < menor){
                menor = valores[posicao]
            }
            soma += valores[posicao]
            media = soma / total
        }
        res.innerHTML = ` `
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores digitados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}