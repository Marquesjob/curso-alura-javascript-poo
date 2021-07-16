export class Conta {

    constructor(saldoInicial, cliente, agencia) {

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor === Conta) {
           throw new Error("Você não deveria instanciar o objeto conta diretamente pois, ele é uma classe abstrata");
        }

    }
    
    set cliente(newClient){
        if(newClient instanceof Cliente) {
            this._cliente = newClient;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Método abstrato
    sacar(valor) {
      throw new Error("Você não pode instanciar um método abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) {
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta) {
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado);
    }

}