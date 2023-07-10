export class PeopleRepository {
    _getLocalStorage
    _setLocalStorage

    constructor() {
        this._getLocalStorage = () => JSON.parse(localStorage.getItem('db')) ?? []
        this._setLocalStorage = (db) => localStorage.setItem("db", JSON.stringify(db))
        console.log('Local Storage')
    }



    //CRUD - creat - read - update - delete


    //Create = create
    create(person){
        let dbPerson = this._getLocalStorage()

        dbPerson.push(person)
        this._setLocalStorage(dbPerson)
    }

    //Read
    read(){
        return this._getLocalStorage()
    }

    //Update = Update, Edit
    update(id, personUpdated){
        let dbPerson = this.read()

        dbPerson[id] = personUpdated
        this._setLocalStorage(dbPerson)
    }

    delete(id){
        let dbPerson = this.read()
        dbPerson.splice(id, 1)
        this._setLocalStorage(dbPerson)
    }

    //Read by id
    readById(id){
    const dbPerson = this.read()
    return dbPerson[id]
    }
    
}