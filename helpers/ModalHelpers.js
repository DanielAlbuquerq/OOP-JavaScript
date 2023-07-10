export class ModalHelper {
    //controler of modal window


    static modal(title, text){
        this.openModal()
        document.querySelector('#title').innerHTML = title
        document.querySelector('#messageModal').innerHTML = `<p>${text}</p>`
    }

    static openModal() {
        document.querySelector('#modal').classList.add('active')
    }

    static closeModal(){
        document.querySelector('#modal').classList.remove('active')
    }

    static closeWindow(){
        document.querySelector('#modalClose').addEventListener('click', this.closeModal)  
        document.querySelector('#no').addEventListener('click', this.closeModal)
    }

    //methods, toggle for visibility
    static hideButtons(){
        document.querySelector('#buttonModal').classList.remove('show')
        document.querySelector('#buttonModal').classList.add('hide')
    }

    static showButtons(){
        document.querySelector('#buttonModal').classList.remove('hide')
        document.querySelector('#buttonModal').classList.add('show')
    }
    
}