import {View} from '../views/View.js' 

export class MessageView extends View{

    constructor(element){
        super(element)

}

_template(model){
    return model.text ? `<p class='alert alert-success'>${model.text}</P>` :
    '<p></p>'
}

update(model){
    this._element.innerHTML = this._template(model)

    //After 3 seconds this arr0w function change innerHTML value
    setTimeout(() => this._element.innerHTML = '', 3000)
}

}