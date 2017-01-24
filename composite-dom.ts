interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text: string
  print() {
    console.log(this.text)
  }
}

class DomElement implements IDomElement {
  private element: string
  private elements = [] 

  print() {
    for (let element of this.elements) {
      element.print();
    }
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }
}