let amigo = {nome: 'José', 
            sexo: 'M', 
            peso: 85.4, 
            engordar(p=0) {
                console.log('Engordou!')
                this.peso += p
            }}
console.log(amigo)
console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)