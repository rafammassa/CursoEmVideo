var idade = 15
if (idade < 16){
    console.log('Não vota.')
} else if (idade < 18){
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}

var agora = new Date()
var hora = agora.getHours()

if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}