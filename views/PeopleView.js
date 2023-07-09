import { View } from '../views/View.js'

export class PeopleView extends View {

    constructor(element) {
        super(element)
    }

    _template(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th> <th>Idade</th> <th>Peso</th> <th>Altura</th> <th>IMC</th> <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.people.map((person, indice) => {
                    return `
                        <tr>
                            <td>
                                ${indice}
                            </td>
                            <td>${person._name}</td>
                            <td>${person._age}</td>
                            <td>${person._weight}</td>
                            <td>${person._height}</td>
                            <td>${person._bmi}</td>
                            <td>${person.classificateBmi}</td>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }



    // you don't need the update method here because you inherit from the super class
    // 
}