
import {PersonController} from "../controllers/PeopleController.js"
import {ModalHelper} from '../helpers/ModalHelpers.js'

const personController = new PersonController()
// TO CONTROL FORM SUBMISSION AND DISPLAY IN THE TABLE
const form = document.querySelector('#form')
// EventListener Form

form.addEventListener('submit', (event) => {    
    // add person 
    personController.add(event)

    personController._cleanForm()
})

////// form formDelet
const formDeleteEdit = document.querySelector('#formDeleteEdit')
const btnDelete = document.querySelector('#btnDelete')
const btnEdit = document.querySelector('#btnEdit')

formDeleteEdit.addEventListener('submit', (event) => {
    event.preventDefault()
})

btnDelete.addEventListener('click', () => {
    //console.log('Delete')

    let id = document.querySelector('#id').value
    console.log('Delete record ' + id)

    document.querySelector('#id').value = null

    ////// INTERACTIONS WITH THE MODAL WINDOW //////
    // Open Modal Window
    openModal('Are you sure you want to delete it?')

    // If Click on Yes button
    document.querySelector('#yes').addEventListener('click', () => {
        personController.delete(id)
        closeModal()
        
    })
    ////// INTERACTIONS WITH THE MODAL WINDOW //////

})

btnEdit.addEventListener('click', () => {

    //console.log('Edit')

    // Scroll the page up
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#name').focus()

    let id = document.querySelector('#id').value
    console.log('Edit Record' + id)

    document.querySelector('#idPerson').value = id
    document.querySelector('#id').value = null

    let person = personController.searchById(id)
    //console.log(person)
    if(person) {
        let { _name, _age, _weight, _height } = person
        
        //Fill the form with data
        personController.fillForm(_name, _age, _weight, _height)
    }
})
////// form formDelete
ModalHelper.closeWindow()   