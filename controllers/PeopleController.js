
import {Person} from "../models/Person.js"
import {PeopleList} from "../models/PeopleList.js"
import {PeopleView} from '../views/PeopleView.js'
import {Message} from "../models/Message.js"
import {PeopleRepository} from '../Repository/PeopleRepository.js'
import { ModalHelper } from "../helpers/ModalHelpers.js"
import {MessageView} from '../views/MessageView.js'
import {Modal} from "../models/Modal.js"
import {ModalView} from "../views/ModalView.js"

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
        console.log(this._peopleRepository)
        let list = this._peopleRepository.read()
        console.log(list)
        ////////////////////////////////////////////////

        //create people list and people view 
        this._peopleList =  new PeopleList(list)
        this._peopleView  =  new PeopleView(document.querySelector('#data'))
        this._peopleView.update(this._peopleList)
      
        // message
        this._message = new Message()
        this._messageView = new MessageView(document.querySelector('#message'))
        this._messageView.update(this._message)

        // modal
        this._modal = new Modal()
        this._modalView = new ModalView(document.querySelector('#messageModal'))
        this._modalView.update(this._modal)
    }

    //Add person
    add(event){
        
        event.preventDefault()

        //create a person
        const personAdd = this._createPerson()
        this._peopleList.add(personAdd)
        //Add to Repository
        this._peopleRepository.create(personAdd)
        this._peopleView.update(this._peopleList)
        //Define and update the message
        this._message.text="Successfully registered"
        this._message.update(this._message) 

        // Screen Update
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
        this._inputName.focus()
    }

}
