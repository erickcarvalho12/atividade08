    const nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`;
    };
    const calcularIdade = function() {
        this.idade = `${2021 - this.anoNascimento}`
        return this.idade
    }
    
    const pessoa = {
        nome: 'Erick',
        sobrenome: 'Pinheiro',
        anoNascimento: 2002,
        nomeCompleto,
        calcularIdade,
    };

    console.log(pessoa);
    console.log(pessoa.calcularIdade());
    console.log(`Idade armazenada em atributo: ${pessoa.idade}`);

    if(pessoa.idade){

        console.log(`Você tem ${pessoa.idade} anos`);
    }

    console.log('......................................................');

    const outraPessoa = {
        nome: 'Filipe',
        sobrenome: 'Jacaré',
        anoNascimento: 2003,
        nomeCompleto,
        calcularIdade,
    };

    console.log(outraPessoa);
    console.log(outraPessoa.calcularIdade());
    console.log(`Idade armazenada em atributo: ${outraPessoa.idade}`);

    if(outraPessoa.idade){

        console.log(`Você tem ${outraPessoa.idade} anos`);
    }