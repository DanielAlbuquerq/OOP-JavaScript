export class PeopleList {

    constructor(list=[]) { // constructor() {
        this._people = list // this._people = []
    }

    add(person) {
        this._people.push(person)
    }

    // remove(id) {
    //     this._people.splice(id, 1)
    // }

    // update(id, personUpdated) {
    //     this._people[id] = personUpdated
    // }

    /* Defensive copying is a programming technique used 
    to protect data from being modified unexpectedly 
    by creating a copy of the original data.*/

    // usando o concat, passando o nosso array como parametro
    get people() {
        return [].concat(this._people)
    }

}
