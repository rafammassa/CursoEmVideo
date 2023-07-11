function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (ano.value.length == 0 || ano.value > anoAtual ){
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var sex  = document.getElementsByName('radsex')
        var idade = anoAtual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked){
            genero = 'um homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
        } else {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')           
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
