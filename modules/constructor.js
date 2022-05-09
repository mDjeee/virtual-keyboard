class Tag {
  constructor(tag, className, parent) {
    this.tag = tag;
    this.className = className;
    this.parent = parent;
  }

  create(tag, className, en = null, ru = null, shift = null, shiftRu = null, code = null) {
    let element = document.createElement(tag);
    element.classList.add(className);
    element.dataset.en = en;
    element.dataset.ru = ru;
    element.dataset.shift = shift;
    element.dataset.shiftRu = shiftRu;
    element.dataset.code = code;
    this.tag = tag;
    return element;
  }

  child(tag, parent) {
    parent.append(tag);
    this.parent = parent;
  }
}

export default Tag;
