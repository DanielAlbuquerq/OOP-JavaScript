import {Person} from "../models/Person.js"
import { PeopleList } from "../models/PeopleList.js"
import { PeopleView } from '../views/PeopleView.js'

export class PersonController{

    //Attributes, Properties
    _inputName
    _inputAge
    _inputWeight
    _inputHeight
    //methods

    //constructor
    constructor(){

        this._inputName = document.querySelector('#name')
        this._inputAge = document.querySelector('#age')
        this._inputWeight = document.querySelector('#weight')
        this._inputHeight = document.querySelector('#height')

        // Repository
        this._peopleRepository = new PeopleRepository()
        //console.log(this._peopleRepository)
        let list = this._peopleRepository.ler()
        console.log(list)
        ////////////////////////////////////////////////

        //create people list and people view 
        this._peopleList =  new PeopleList(list)
        this._peopleView  =  new PeopleView(document.querySelector('#dados'))
        this._peopleView.update(this._peopleList)
      
        // message
        //this._message = new Mensagem()
        // this._messageView = new MessageView(document.querySelector('#mensagem'))
        // this._messageView.update(this._message)

        // modal
        this._modal = new Modal()
        this._modalView = new ModalView(document.querySelector('#mensagemModal'))
        this._modalView.update(this._modal)
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

            this._inputName.value,
            this._inputAge.value,
            this._inputWeight.value,
            this._inputHeight.value
        )
    }

    //Clean Form
    _clearForm(){
        this._inputName.value = ''
        this._inputAge.value = ''
        this._inputWeight.value = ''
        this._inputHeight.value = ''

        this._inputName.focusAge_inputAWeight_inputWHeight_inputHeight
    }

}
