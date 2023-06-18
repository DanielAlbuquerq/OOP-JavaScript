import {Person} from "../models/Person.js"

export class PersonController{

    //Attributes, Properties
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura


    //methods






    //constructor
    export class constructor(){

        this._inputNome = document.querySelector('#nome')
        this._inputIdade = document.querySelector('#idade')
        this._inputPeso = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')

        // create a list of people

        //this._peopleList = new PeopleList()

        //this._peopleView = new PeopleView(document.querySelector)

        //this._peopleView.update(this._PeopleList)
    }

    //Add people
    add(event){
        
        event.preventDefault()

        //create a person
        this._createPerson()
        console.log(this._createPerson())

    }
    
    //create Person
    _createPerson(){
        return new Person(

            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
        }

    //Clean Form
    _clearForm(){
        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''

        this._inputNome.focus()
    }

}