// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let a = "hello";
// console.log(a);
// document.write(a);
// alert(a);

// let b = "owu";
// console.log(b);
// document.write(b);
// alert(b);

// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// let hello = 'hi';
// console.log(hello);
// document.write(hello);
// alert(hello);

// let com = 5;
// console.log(com);
// document.write(com);
// alert(com);

// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const a = 1
// const b = 2
// const c = 3
// console.log(a, b, c)
// document.write(a, b, c)
// alert(a, b, c)

// const a = 'hello'
// const b = 'world'
// const c = 'yey'
// console.log(a, b, c)
// document.write(a, b, c)
// alert(a, b, c)

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// const name = prompt('Roman');
// const surName = prompt('Style');
// const lastName = prompt('the Best');
// console.log (name + ''+ surName +''+ lastName)
// // - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// let person = `${name} ${surName} ${lastName}`

// console.log (person)

//  - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// const name = prompt('your name');
// const surName = prompt('your surName');
// const lastName = prompt('your lastName');
// let person = `${name} ${surName} ${lastName}`
// console.log (person)
// const name1 = prompt('your name');
// const surName1 = prompt('your surName');
// const lastName1 = prompt('your lastName');
// let person1 = `${name1} ${surName1} ${lastName1}`
// console.log (person1)
//   - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let number = +prompt('num 1')
// let number2 = +prompt('num 2')
// let number3 = +prompt('num 3')
// console.log(number, number2, number3)
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let number = parseInt(prompt('num 1'))
// let number2 = parseInt(prompt('num 2'))
// let number3 = parseInt(prompt('num 3'))
// console.log(number, number2, number3)
// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let number = parseFloat(prompt('num 1'))
// let number2 = parseFloat(prompt('num 2'))
// let number3 = parseFloat(prompt('num 3'))
// console.log(number, number2, number3)
// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let number = prompt('enter number')
// let num = parseFloat(number)
// let rst = Math.round(num)
// console.log(rst)
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// let num = prompt(3)
// let pow = prompt('pow')
// let result = Math.pow(num, pow)
// console.log(result)
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = '100';
//  let b = 12;
//  let c = true; 
//  let d = undefined;
//  console.log(typeof (a), typeof(b), typeof(c), typeof(d))
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 < 6 -> true
//     5 > 6 -> false
//     5 === 6 -> false
//     5 >= 6 -> false
//     10 == 10 -> true
//     10 === 10 -> true
//     10 < 10 -> false
//     10 != 10 -> false
//     10 >= 10 -> false
//     123 === '123' -> false
//     123 == '123' -> true
// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0'); true
// console.log(!!'null'); true
// console.log(!!'undefined'); true
// console.log(!!(3/'owu')); false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false

// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// let str = "Привет"
// console.log(typeof(str));
// let num = 123
// console.log(typeof(num));
// let flag = true
// console.log(typeof(flag));
// let txt = "true"
// console.log(typeof(txt));
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// let str = "Привет"
// let num = 123
// let flag = true
// let txt = "true"
// if (typeof str === String || typeof num === Number || typeof flag === Boolean)
// return true

//   2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     let a1 = 5 + 3,
// console.log(a1);
//     let a2 = 5 - 3,
// console.log(a2);
//     let a3 = 5 * 3,
// console.log(a3);
//     let a4 = 5 / 3,
// console.log(a4);
//     let a5 = 5 % 3
// console.log(a5);
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//    let a6 =  5 % 3,
// console.log(a6);
//    let a7 =  3 % 5,
// console.log(a7);
//    let a8 =  5 + '3',
// console.log(a8);
//    let a9 =  '5 - 3,
// console.log(a9);
//    let a10 =  75 + 'кг'
// console.log(a10);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let wight = +prompt('wight')
// let height = +prompt('height')
// let s = wight * height
// console.log(s);
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
// let dC = +prompt('dC')
// let heightC = +prompt('height')
// let v = dC /2 * height
// console.log('Радіус циліндра:'+ v);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3
// let m = 4
// return Math.pow(n,2) + m**
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = 'hello world'
// alert(str)
// document.write(str)
// console.log(str)
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// const name = prompt('your name');
// const surName = prompt('your surName');
// const lastName = prompt('your lastName');
// let person = `${name} /n ${surName} /n ${lastName}`
//    const age = prompt('your age');
//    const hobbie = prompt('your hobbie');
//    alert(age)
// alert (person)
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’

//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// let concatenation = str1 + ''+ str2 +'' +str3
//   Вывести в документ содержимое переменной concatenation спомощью document.write
//  document.write(concatenation)
// let str1 = 'кто'
// let str2 = 'ти'
// let str3 = 'такий'
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);
//  10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); 205
//      document.write(str - a + "<br/>"); 15
//      document.write(str * "2" + "<br/>"); 100
//      document.write(str / 2 + "<br/>"); 10
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") 3
//     parseInt("-7.875") -7
//     parseInt("435") 435
//     parseInt("Вася") NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// const first = prompt('your first');
// const second = prompt('your second');
// alert(first + second) 
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// const name = prompt('your name');
// const surName = prompt('your surName');
// const age = prompt('your age');
// alert(`Доброго вечера ${name} ${surName}, мои поздравления что вам ${age}`)
// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let a = ''
// let b = ''
// let c = ''
// if (a > c && a > b){
//     if(b > c) {
//         console.log(a, b, c)

//     }else{
//         console.log(a, c, b)
//     }
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt(); {
// if (color == green)
// document.write('go');
// if(color == yellow);
// document.write('wait');
// if(color == red);
// document.write('stop');
// } else {
//     document.write('as u wish')
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt(); {
    // if (color == green && emptyRoad)
    // document.write('go');
    // if (color == green && !emptyRoad)
    // document.write(' dont go');
    // if(color == yellow && emptyRoad);
    // document.write('wait');
      // if(color == yellow && !emptyRoad);
    // document.write('wait again');
    // if(color == red && emptyRoad);
    // document.write('stop');
    // if(color == red && !emptyRoad);
    // document.write('stop and wait');
    // } else {
    //     document.write('as u wish')
    // }
 
