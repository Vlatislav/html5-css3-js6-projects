//CLASSES !!!//CLASSES !!!//CLASSES !!!//CLASSES !!!//CLASSES !!!//CLASSES !!!



//class Car {
//    constructor(speed){
//        this.speed = speed;
//    }
//    viewSpeed(){
//        return `моя скорость: ${this.speed} км/ч`;
//    }
//   
//}
//car1 = new Car(200);
//let speedOfCar1 = car1.speed;
//console.log(speedOfCar1);
//console.log(car1.viewSpeed());
//car2 = new Car(230);
//let speedOfCar2 = car2.speed;
//console.log(speedOfCar2);
//
//let findElement = document.querySelector('#car');
//console.log(findElement);
//findElement.innerHTML = car1.viewSpeed();
//car2.speed = 302;
//let findElement2 = document.querySelector('#car2');
//console.log(findElement2);
//findElement2.innerHTML = car2.viewSpeed();
// class Component {
//     constructor(selector)
//     {
//         this.$comp = document.querySelector(selector)
//     }
//     hide(){
//         this.$comp.style.display = 'none'
//     }
//     show(){
//         this.$comp.style.display = 'block'
//     }
// }
//
// class Box extends Component{
//     constructor(options) {
//         super(options.selector);//вызываешь конструктор родителя
//         this.$comp.style.width = this.$comp.style.height = options.size + 'px'
//         this.$comp.style.background = options.color
//     }
// }
// const box1 = new Box({
//     selector: '#box1',
//     size: 240,
//     color: 'red',
// })
//
// class Circle extends Box{
//     constructor(options) {
//         super(options)
//         this.$comp.style.borderRadius = '50%'
//     }
// }
// const circle = new Circle({
//     selector: '#circle',
//     size: 120,
//     color: 'green',
// })










//EVENT LOOP !!!//EVENT LOOP !!!//EVENT LOOP !!!//EVENT LOOP !!!//EVENT LOOP !!!




//console.log('Start');
//console.log("Start2")
//setTimeout(function () {
//	console.log("Settimeout after 3 sec")
//}, 3000)
//console.log("End")
//
//console.log('Start');
//console.log("Start2")
//setTimeout(function () {
//	console.log("Settimeout after 3 sec")
//}, 0)
//console.log("End")




//ЗАМЫКАНИЯ!!!//ЗАМЫКАНИЯ!!!//ЗАМЫКАНИЯ!!!//ЗАМЫКАНИЯ!!!//ЗАМЫКАНИЯ!!!




//
//function mmm(name){
//	return function(sport){
//		console.info(`My name is ${name} and i like play in a ${sport}`)
//	}
//}
//
//let jackF = mmm('Jack')
//jackF('fotball')
//jackF('basketball')
//let maxF = mmm('Max')
//maxF('hokkey')




//СОБЫТИЯ//СОБЫТИЯ//СОБЫТИЯ//СОБЫТИЯ//СОБЫТИЯ//СОБЫТИЯ//СОБЫТИЯ

// console.log(btn);
// btn.onmousedown = () => console.log("Clicked1")
//btn.onmousedown = function() { console.log("Clicked2")}




//PROMISE//PROMISE//PROMISE//PROMISE//PROMISE//PROMISE//PROMISE


/*.then() 	если выполнилось
.catch()  	если споймали ошибку
.finally()	в любом случае выполнится


*/
//resolve()-если выполнилось и тогда then()
//так же в resolve(data)=>then(data){ и работаем с data в then}
//reject()- если не выполнилось и так же внутрь можно что-то передать
//если reject(...) => catch(...)






//сделал функцию-промис, передаю миллисекунды и колбэк
//const sleep = ms => {
//	return new Promise(resolve => {
//		setTimeout(() => resolve(), ms)
//	})
//}
//sleep(2000).then(() => console.log('After 2 sec'))
//sleep(5000).then(() => console.log('After 5 sec'))

//ждем пока две функции выполнятся и только потом выполняем колбэк
//Promise.all([sleep(2000), sleep(10000)])//оба сработали тогда выполняем
//	.then(() => console.log('Обе функции выполнились и вывели!ALL'))
//	.catch(() => console.log('Что-то пошло не так!!!'))
//	.finally(() => console.log('Finally'))
//
//Promise.race([sleep(2000), sleep(5000)])//как только один выполнился 
//	.then(() => console.log('Обе функции выполнились и вывели!RACE'))
//	.catch(() => console.log('Что-то пошло не так!!!'))
//	.finally(() => console.log('Finally'))
//




//Object.create()//Object.create()//Object.create()//Object.create()





//const person = Object.create({
//	//здесь прототип
//	calculateAge(){
//		console.log('Age = ',new Date().getFullYear() - this.birthYear)
//	}
//}, {
//	name: {
//		value: 'Vlatislav',
//		enumerable: true, //можно использовать for in
//		writable: true, //можно изменять поле
//		configurable: true, //можно удалять поле
//
//	},
//	birthYear: {
//		value: 2001,
//		enumerable: false, //false = default
//		writable: true, //false = default
//		configurable: false, //false = default
//	},
//	age: {
//		get() {
//			return new Date().getFullYear() - this.birthYear
//		},
//		set(newBirthYear) {
//			this.birthYear = new Date().getFullYear() - newBirthYear
//			console.log('You are set new age = ', newBirthYear)
//		}
//	}
//})
////person.name = 'VlaD'
//
////const person = {
////	name: 'Vlatislav',
////	birthYear: 2001,
////}
//
//console.log(person)
//for (let key in person){
//	//проверка чтобы цикл не забегал в прототип и не зашел в функцию нашу которая в прототипе
//	if(person.hasOwnProperty(key)){
//		console.log('Key -> ', key, ' = ', person[key])
//	}
//	
//}
// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
//      А также есть методы для их проверки:
// Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.

// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.

// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.


//function printNumbers(from, to) {
//    let current = from;
//
//    let timerId = setInterval(()=> {
//        console.log(current);
//        if (current == to) {
//            clearInterval(timerId);
//        }
//        current++;
//    }, 1000);
//}
//printNumbers(3,6)
console.log('Hello')




//ASINC AWAIT//ASINC AWAIT//ASINC AWAIT//ASINC AWAIT//ASINC AWAIT//ASINC AWAIT

const sleep = ms => {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(`We wait ${ms}`), ms)
	})
}
// sleep(1000)
//     .then(() => sleep(1002) )
//     .then((data) => console.log(data))

// async function asyncdelay(){
//     try {
//         const data = await sleep(2000)
//         console.log(data)
//     }
//     catch (e){
//         console.log(`Error : ${e}`)
//     }
// }
// asyncdelay()

//.all() ждет пока все завершатся
// Promise.all([
//     sleep(1000),
//     sleep(500),
//     sleep(3500)
// ]).then(data => console.log(data))

//.race() ждет пока самый быстрый выполнится
Promise.race([
    sleep(1000),
    sleep(500),
    sleep(3500)
]).then(data => console.log(data))



