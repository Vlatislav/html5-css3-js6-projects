import image from './assets/image.png'
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/blocks'
import {css} from './utils'

const text = `
Зачем мне нужен был этот конструктор сайта спросите вы? Да честно я и сам не знаю) Скорее всего для опыта работы с вышеперечисленными технологиями да и просто "КАБ БЫЛО) GOOD LUCK!"
<a href="https://vk.com/litvinov_prog" style="text-decoration: none; color: #c42f2f; font-size: 2rem;">Ссылка на мой ВК</a>
`

export const model = [
//     {
//         type: 'title',
//         value: 'Конструктор сайтов на чистом JavaScript!',
//         options: {
//             tag: 'h2',
//             styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
//         }},
//     {
//         type:'image',
//         value: image,
//         options: {
//             styles: 'margin: 20px;display: flex; justify-content: space-around;',
//             tag: 'photo from Internet',
//             imageStyles:'width: 400px; height: auto;'
//         }
//     },
//     {
//         type: 'text',
//         value: text,
//         options: {
//             styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
// }},
//     {
//         type: 'textColumns',
//         value: [
//             'Приложение на чистом JavaScript, без использования библиотек',
//             'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
//             'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
//         ],
//         options: {
//             styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
//         }},
    new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
        tag: 'h2',
        styles: css({
        background:'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align':'center'
        })
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }),
    new TextColumnsBlock([
        'Здесь я использовал технологии, как:',
        'WEBPACK',
        'NODE.JS',
        'FIREBASE'
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    })
]