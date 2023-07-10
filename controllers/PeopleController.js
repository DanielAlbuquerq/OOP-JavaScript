
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
      
        // // message
        // this._message = new Message()
        // this._messageView = new MessageView(document.querySelector('#message'))
        // this._messageView.update(this._message)

        // modal
        this._modal = new Modal()
        this._modalView = new ModalView(document.querySelector('#messageModal'))
        this._modalView.update(this._modal)
    }

    //Add person
    add(event){
        
        event.preventDefault()
        const id = document.querySelector('#idPerson').value
        

        //If there is no ID add one, otherwise call Update method
        if(!id){
            console.log('There is no ID' + id)
            //add new person in List and Update the interface
            const personAdd = this._createPerson()
            this._peopleList.add(personAdd)

            // add to Repository
            this._peopleRepository.create(personAdd)
            this._peopleView.update(this._peopleList)

            // // define and update messages
            // this._message.text = "Person successfully registered!"
            // this._messageView.update(this._message)

            this._modalView.update(this._modal)
        } else {
            console.log('ID => ' + id)
            this.update(id)
        }
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
    
    delete(id){
        //if there is ID delete the record
        if(id){
            this._peopleList.delete(id)
            this._peopleView.update(this._peopleList)
            //update the view

            this._peopleRepository.delete(id) // remove from Repository
            console.log('peopleController Deleted it')
        }
    }
  

    fillForm(name, age, weight, height){    
        this._inputNome.value = name
        this._inputAge.value = age
        this._inputWeight.value = weight
        this._inputHeight.value = height
    }

 
    searchById(id){
        let personFound = this._peopleRepository.readById()
        return personFound
    }

    update(id){
    //update Person - Create a new updated person
    let personUpdated = this._createPerson()
    console.log(personUpdated)

    //Update repository
    this._peopleRepository.update(id, personUpdated)
    console.log('Updated Repository')

    //Update List
    this._peopleList.update(id, personUpdated)
    console.log('Updated the List')

    //Update the View
    this._peopleView.update(this._peopleList)
    document.querySelector('#idPerson').value = null
}
  


}
