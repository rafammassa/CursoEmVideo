function gerarTabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    var n = Number(num.value)

    if (num.value.length == 0){
        window.alert('Digite um número!')
    } else {
        tab.innerHTML = ` `
        for (var c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}