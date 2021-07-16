import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js"; 
import { SistemaAutenticação } from "./SistemaAutenticação.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo",  5000, 12345678901);
gerente.cadastrarSenha("12345");
const cliente = new Cliente("Marcela", 12345678901, "123");

const testarLogin = SistemaAutenticação.login(cliente, "123");

console.log(testarLogin);