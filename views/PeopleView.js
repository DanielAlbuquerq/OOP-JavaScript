import { View } from '../views/View.js'
import { Person } from '../models/Person.js'

export class PeopleView extends View {

    constructor(element) {
        super(element)
    }

    template(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th> <th>Age</th> <th>Weight</th> <th>Height</th> <th>BMI</th> <th>Classification</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.people.map((person, index) => {
                    return `
                        <tr>
                            <td>
                                ${index}
                            </td>
                            <td>${person._name}</td>
                            <td>${person._age}</td>
                            <td>${person._weight}</td>
                            <td>${person._height}</td>
                            <td>${person._bmi.toFixed(2)}</td>
                            <td>${person._classification}</td>
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