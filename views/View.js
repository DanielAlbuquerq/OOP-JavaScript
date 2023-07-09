export class View {
    
    constructor(element){
        this._element = element
    }

    template(model){
        throw new Error('The template method should be implemented in this class')
    }

    update(model){
        this._element.innerHTML = this.template(model)
    }

}