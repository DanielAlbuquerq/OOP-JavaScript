import {View} from './View.js'
import{ModalHelper}from '../helpers/ModalHelpers.js'

export class ModalView extends View {

    constructor(element){
        super(element)
    }
    

    template(model){
        return model.title ? ModalHelper.modal(model.title, model.text) : ''
    }

}