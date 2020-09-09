//именно тут у нас и прогоняются все созданные блоки и отображаются
export class Site{
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    render(model){
        this.$el.innerHTML = ''
        model.forEach(block => {
            //вставляем как в стеке по очереди в конец
            this.$el.insertAdjacentHTML('beforeend',block.toHTML())
        })
    }
}