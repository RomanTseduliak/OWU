// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let users = [{
//               				name: 'vasya',
//               				age: 31,
//               				status: false,
              				
//               			}, {
//               				nic: "petya",
//               				height: 30,
//               				wife: true,
              				
//               			}, {
//               				SurName: "kolya",
//               			  flour: 29,
//               				drink: true,
              				
//               			}, {
//                        city: 'Prague',
//                         country: 'Czech',
//                          street: 'Paster',
//               			}, {
              				
//               				house: true,
//                       address:  'Istanbul', 
//                        houseNumber: 39
//                     }]
              
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let user = {name: 'vasya', age: [2, 31, 3], status: {wife : false, name : was} };
                      
// let petia = {nic: 'petya',height:  [2, 31, 3],wife: { monday :true,friday : true,wednesday : false } }                

// let kolia = {SurName: 'kolya', flour: [2, 31, 3], drink: {wife : false, name : was} }
                  
// let town = {city: 'Prague',  country: [Czech, Istanbul, NewYork], drink: {wine : false, vodka : was, gin: true} }

// let kilt = {SurName: 'kolya', flour: [2, 31, 3], drink: {wine : false, vodka : was, gin: true} }

                        
                			
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for(key in user) {
//   console.log('key', key);
// }
// for(key in petia) {
//   console.log('key', key);
// }
// for(key in kolia) {
//   console.log('key', key);
// }
// for(key in town) {
//   console.log('key', key);
// }
// for(key in kilt) {
//   console.log('key', key);
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(user))
// console.log(Object.keys(petia))
// console.log(Object.keys(kolia))
// console.log(Object.keys(town))
// console.log(Object.keys(kilt))
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//   {model: 'tesla', year: '2013', power: 122, color: 'yellow'},
//   {model: 'mazda', year: 2013, power: 222, color: 'black'},
//   {model: 'opel', year: 2013, power: 111, color: 'orange'},
//   {model: 'vw', year: 2013, power: 222, color: 'yellow'},
//   {model: 'benz', year: 2013, power: 333, color: 'black'},
//   {model: 'bmw', year: 2013, power: 233, color: 'orange'},
//   {model: 'yaz', year: 2013, power: 133, color: 'black'},
//   {model: 'laz', year: 2013, power: 111, color: 'yellow'},
//   {model: 'volga', year: 2013, power: 311, color: 'black'},
//   {model: 'peogeot', year: 2013, power: 131, color: 'orange'}
// ]
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
//     {model: 'tesla', year: 2013, power: '122', color: 'yellow', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'mazda', year: '2013', power: '222', color: 'black', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'opel', year: '2013', power: '111', color: 'orange', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'vw', year: '2013', power: '222', color: 'yellow', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'benz', year: '2013', power: '333', color: 'black', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'bmw', year: '2013', power: '233', color: 'orange', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'yaz', year: '2013', power: '133', color: 'black', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'laz', year: '2013', power: '111', color: 'yellow', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'volga', year: '2013', power: '311', color: 'black', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} },
//     {model: 'peogeot', year: '2013', power: '131', color: 'orange', driver: {name: 'Andrij', age: '22', sex: 'man', experience: '2'} }
//   ]
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i < cars.length) {
//   const user = users[i];
//   console.log(user);
//   i++;
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i = 0; i<cars.length; i++) {
//   const user = users[i];
//     console.log(user);
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for(const user of users) {
  
//     console.log(user);
// }
// - взять объекты из задания 1 и превратить каждый в json.
// const myJson = JSON.stringify(users)
// console.log(myJson)
// - взять json из задания 11 и превратить их обратно в объекты.
// const myJsons = JSON.parse(myJson)
// console.log(myJsons)
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for(let i = 0; i<cars.length; i++) {
//     const car = cars[i];
//       console.log(JSON.stringify(car));
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for(let i = 0; i<cities.length; i++) {
//     const city = cities[i];
//       console.log(JSON.stringify(city));
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArr = [];
// for(let i = 0; i<cars.length; i++) {
//     const car = cars[i];
//     newArr[i]=JSON.parse(JSON.stringify(car));
// }
//       console.log(newArr);
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// for(const car of cars ) {
//   console.log("model :", car.model);
//   for(const car of cars ) {
//       console.log("color :",car.color);
      
// }

// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let arr = [];
// for(const car of cars ) {
  
//   for(const drivers of car.power ) {
      
//       arr.push(drivers)
// }
// console.log(arr);
// }
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for(const user of users ) {
//   console.log("name :", user.name);
//   for(const user of users ) {
//       console.log("skills :",user.skills);
      
// }

// }


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users = [{
              				name: 'vasya',
              				age: 31,
              				status: false,
              				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
              			}, {
              				name: 'petya',
              				age: 30,
              				status: true,
              				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
              			}, {
              				name: 'kolya',
              				age: 29,
              				status: true,
              				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
              			}, {
              				name: 'olya',
              				age: 28,
              				status: false,
              				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
              			}, {
              				name: 'max',
              				age: 30,
              				status: true,
              				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
              			}, {
              				name: 'anya',
              				age: 31,
              				status: false,
              				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
              			}, {
              				name: 'oleg',
              				age: 28,
              				status: false,
              				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
              			}, {
              				name: 'andrey',
              				age: 29,
              				status: true,
              				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
              			}, {
              				name: 'masha',
              				age: 30,
              				status: true,
              				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
              			}, {
              				name: 'olya',
              				age: 31,
              				status: false,
              				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
              			}, {
              				name: 'max',
              				age: 31,
              				status: true,
              				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
                    }];
    // let ip = [];
    // for(const user of users){
    //   ip.push(user.address)

    // }
    // console.log(ip)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for(let i = 0; i< users.length; i++){
//   const user = users[i];
//   const div = document.createElement('div');
//   div.innerText = `${user.name} ${user.age}`
//   document.body.appendChild(div);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for(let i = 0; i< users.length; i++){
//   const user = users[i];
//   const div = document.createElement('div');
//   const h2 = document.createElement('h2');
//   const p1 = document.createElement('p');
//   const p2 = document.createElement('p');
//   let address = ""
//   for(const addressA in user.address){
//     address = address + ' ' +  user.address[addressA];
//   }
//   h2.innerText = user.name;
//   p1.innerText = user.age;
//   p2.innerText = address
 
  
//   div.appendChild(h2);
//   div.appendChild(p1);
//   div.appendChild(p2);
//   document.body.appendChild(div)
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for(let i = 0; i< users.length; i++){
//   const user = users[i];
//   const div = document.createElement('div');
//   const name = document.createElement('h2');
//   const age = document.createElement('p');
//   const status = document.createElement('p');
//   const adress = document.createElement('div');
  
//   for(const addressA in user.address){
//     const addressAd = document.createElement('div');
//     addressAd.innerHTML = user.address[addressA];
//     adress.appendChild(addressAd);
//   }
//   name.innerText = user.name;
//   age.innerText = user.age;
//   status.innerText = user.status;

 
  
//   div.appendChild(name);
//   div.appendChild(age);
//   div.appendChild(status);
//   div.appendChild(adress);
//   document.body.appendChild(div)
// }           		


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// for(const  user of usersWithId) {
//   for(const city of citiesWithId){
//     if(user.id === city.user_id){
//       user.address = city;
//     }
//   }
// }
// console.log(usersWithId)

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// const getElement = document.getElementById("content");
// const newHeader = document.createElement("div");
// newHeader.innerText = 'watch-header';
// newHeader.style.width = '30px';
// newHeader.style.height = '30px';
   
// console.log(newHeader)
// - змінити цей текст використовуючи селектори id, class,  tag
// const getElement = document.getElementsByClassName('rule1');
// for( let element of getElement) {
// 	element.innerText = "hello world"
// }
// console.log(getElement)
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td = document.createElement('td')
// let td2 = document.createElement('td')
// let td3 = document.createElement('td')
// tr.appendChild(td);
// tr.appendChild(td2)
// tr.appendChild(td3);
// table.appendChild(tr);
// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту.