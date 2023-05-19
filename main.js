import { Pessoa } from "./Person.js";

// criar novo objeto a partir da class, instanciar
let pessoa1 = new Pessoa("Edson Maia", 40, 84.5, 1.75);
let pessoa2 = new Pessoa("Maria", 66, 73.4, 1.63);
let pessoa3 = new Pessoa("Ana", 20, 42.3, 1.41);
let pessoa4 = new Pessoa("Bia", 50, 98.7, 1.52); 
let pessoa5 = new Pessoa("Daniel", 24, 73.0, 1.72);

console.log(Pessoa.totalPessoas);
console.log("Situação " + pessoa1.classificaImc());
console.log("Situação " + pessoa2.classificaImc());
console.log("Situação " + pessoa3.classificaImc());
console.log("Situação " + pessoa4.classificaImc());
console.log("Situação " + pessoa5.classificaImc());

console.log("Nome " + pessoa1.nome);
console.log("Idade " + pessoa1.idade);
console.log("IMC " + pessoa1.imc);
console.log("Peso " + pessoa1.peso);

// Usando método set
pessoa1.nome = "Edson Lopes";
pessoa1.idade = 39;
pessoa1.peso = 80.0;
