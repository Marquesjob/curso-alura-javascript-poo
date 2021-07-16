/*
    Ser autenticavel significa ter o método autenticar
*/
export class SistemaAutenticação {
    static login(autenticavel, senha) {
        if(SistemaAutenticação.verificacao(autenticavel)){
            return autenticavel.autenticar(senha);
        } else {
            return false;
        }
       
    }

    static verificacao(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function  // in verifica se a propriedade especifica existe no objeto passado
    }
}