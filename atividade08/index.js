

////////////////////////////////////////////////////////////////////////////////////////////////

const gorjeta = function() {

        if (this.conta < 50) {
            this.gorjeta = (20 /100) * this.conta;
             return this.gorjeta
        }else if (this.conta >= 50 && this.conta <= 200) {
            this.gorjeta = (15 / 100) * this.conta;
            return this.gorjeta
            
        }else if(this.conta > 100){
            this.gorjeta = (10 / 100) * this.conta;
            return this.gorjeta
        }

    }

    const total = function(){

        const contaFloat = parseFloat(this.conta);
        const gorjetaFloat = parseFloat(this.gorjeta);

        return this.totalConta = contaFloat + gorjetaFloat;
    }
    
    const toString = function(){
        return `Restaurante ${this.nome} - [Valor: R$ ${this.conta} | Gorjeta: R$ ${this.gorjeta.toFixed(2)} | Total: R$ ${this.totalConta.toFixed(2)}]`
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    

    const rest = prompt('Informe a quantidade de restaurantes visitados: ');
    const restInt = parseInt(rest);

    const restaurantes = [];

    console.log(restaurantes);

    for(let i =0; i<restInt; i++){
        
        const restaurante = {
            
            nomeRest: function(nome) {
                this.nome = nome;
            },
            contaRest: function(conta) {
                this.conta = conta;
            },
            gorjeta,
            total,
            toString,

        }

        restaurante.nomeRest(prompt('Informe o nome do restaurante: '));
        restaurante.contaRest(prompt('Informe o valor da conta: '));
        restaurante.gorjeta();
        restaurante.total();
        restaurante.toString();
        restaurantes.push(restaurante);

    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    restaurantes.gasto = function () {
    let total = 0
    for (let i = 0; i < restInt; i++) {
        total += parseFloat(restaurantes[i].total())
    }
    return total
}

restaurantes.media = function () {
    return (restaurantes.gasto()/restInt)
}

restaurantes.maior = function () {
    let maior = 0
    for (let i = 0; i < restInt; i++) {
        let aux = 0
        aux = parseFloat(restaurantes[i].total())
        if (aux > maior) {
            maior = i
        }
    }
    return restaurantes[maior]
}

restaurantes.imprimir = function () {
    console.log(`Restaurantes visitados no feriado: ${restInt}`)
    console.log(`Listo de gastos: `)
    for (let i = 0; i < restInt; i++) {
        console.log(`\t${restaurantes[i].toString()}`)
    }
    console.log(`Total gasto: R$ ${restaurantes.gasto().toFixed(2)}`)
    console.log(`Média de gastos: R$ ${restaurantes.media().toFixed(2)}`);
    console.log(`Restaurante com maior gasto total: ${restaurantes.maior().nome} (R$ ${restaurantes.maior().total().toFixed(2)})`);
}

restaurantes.imprimir();