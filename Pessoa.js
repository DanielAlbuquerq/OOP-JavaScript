export class Pessoa {
    _nome;
    _idade;
    _peso;
    _altura;
    _imc;
  
    static totalPessoas = 0;
  
    constructor(nome, idade, peso, altura) {
      this._nome = nome;
      this._idade = idade;
      this._peso = peso;
      this._altura = altura;
      this._imc = this._peso / (this._altura * this._altura);
      Pessoa.totalPessoas += 1;
    }
  
    //set imc
    calculaImc() {
      return (this._peso / (this._altura * this._altura)).toFixed(2);
    }
  
    get nome() {
      return this._nome;
    }
  
    get idade() {
      return this._idade;
    }
  
    get peso() {
      return this._peso;
    }
    get altura() {
      return this._altura;
    }
    get imc() {
      return this._imc;
    }
    get totalPessoas() {
      return Pessoa.totalPessoas;
    }
  
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    set idade(novaIdade) {
      this._idade = novaIdade;
    }
  
    set peso(novoPeso) {
      this._peso = novoPeso;
    }
    set altura(novaAltura) {
      return (this._altura = novaAltura);
    }
  
    classificaImc() {
      //pega o Imc
      let valordoImc = (this.imc).toFixed(2);
      let classificacao = "";
  
      if (valordoImc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (valordoImc <= 24.9) {
        classificacao = "Peso normal";
      } else if (valordoImc <= 29.9) {
        classificacao = "Sobrepeso";
      } else if (valordoImc <= 34.9) {
        classificacao = "Obesidade grau I";
      } else if (valordoImc <= 39.9) {
        classificacao = "Obsesidade grau II";
      } else if (valordoImc >= 40) {
        classificacao = "Obsesidade grau III ou Mórbida";
      } else {
        classificacao = "Peso inválido";
      }
      return classificacao;
    }
  } //fim da class Pessoa