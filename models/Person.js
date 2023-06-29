export class Person {
  _name;
  _age;
  _weight;
  _height;
  _bmi;
  _classification;
  static peopleTotal = 0;

  new;

  constructor(name, age, weight, height) {
    this._name = name;
    this._age = age;
    this._weight = weight;
    this._height = height;
    this._bmi = this.weight / (this.height * this.height);

    Person.peopleTotal += 1; //increments(adds one to)
    this._classification = this.classificateBmi();
  }

  //get bmi
  calculateBmi() {
    return this.bmi;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get weight() {
    return this._weight;
  }
  get height() {
    return this._height;
  }
  get bmi() {
    return this._bmi;
  }
  get peopleTotal() {
    return Person.peopleTotal;
  }

  set name(newname) {
    this._name = newname;
  }

  set age(newage) {
    this._age = newage;
  }

  set weight(newweight) {
    this._weight = newweight;
  }
  set height(newheight) {
    return (this._height = newheight);
  }

  classificateBmi() {
    //pega o bmi
    let bmiValue = this.bmi.toFixed(2);
    let classification = "";

    if (bmiValue < 18.5) {
      classification = "Underweight";
    } else if (bmiValue <= 24.9) {
      classification = "Healthy Weight";
    } else if (bmiValue <= 29.9) {
      classification = "Overweight";
    } else if (bmiValue <= 34.9) {
      classification = "Obesage grau I";
    } else if (bmiValue <= 39.9) {
      classification = "Obsesage grau II";
    } else if (bmiValue >= 40) {
      classification = "Obsesage grau III ou Mórbida";
    } else {
      classification = "weight inválido";
    }
    return classification;
  }
} //fim da class Person
