//создание самого сайта
// import './module'
// import {templates} from "./templates";
import {model} from './model'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'
//основной сайт


const site = new Site('#site')


const updateCallBack = newBlock =>{
    model.push(newBlock)
    site.render(model)
}
//панель для создания блоков и тп
new Sidebar('#panel', updateCallBack)

site.render(model)