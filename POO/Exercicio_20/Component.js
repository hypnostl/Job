export class Component{
  #element = null

  constructor(tag, parent, options){
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  build(){
    this.#element = document.createElement(this.tag)
    Object.assign(this.#element, this.options)//os valores de options são imbutidos em #elements
    return this
  }

  render(){
    
  }
}


const el =new Component()
