import {col, row} from '../utils'
//ООП, делаем примеры блоков на основе обычного
//у каждого есть метод to HTML()
//который возвращает обычный html чтобы потом вставить его на страничку
//для отображение соответствующего блока с его заданными данными
class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован!')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag = 'h2', styles} = this.options
    return row(col(`
      <${tag}>${this.value}</${tag}>
    `), styles)
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {alt, styles, imageStyles} = this.options
    const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}" />`
    return row(html, styles)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`
      <p style="margin-bottom: 0;">${this.value}</p>
    `), this.options.styles)
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map(item => col(item))
    return row(html.join(''), this.options.styles)
  }
}

