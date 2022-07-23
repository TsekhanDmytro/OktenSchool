// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let i = 3.14;
// let j = 2.7;
// let k = 16;
// let l = true;
// let m = false;
//
// console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);
// document.write(`${a} ${b} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);
// alert(`${a} ${b} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);


// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let firstName = 'Dmytro';
// let middleName= 'Tsekhan';
// let lastName= 'Alabamov';
// let person = `${middleName} ${firstName} ${lastName}`;
// console.log(person);


// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a, typeof b, typeof c);


// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// let firstName = prompt('firstName');
// let middleName= prompt('middleName');
// let age= prompt('age');
// console.log(`${firstName} ${middleName} ${age}`)


// // - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// // <----->
// // - Створити об'єкт book з наступними полями :
// // назва, (тип string)
// // кількість сторінок (числовий тип),
// // жанр (string)
// // <----->
// // - Створити об'єкт book з наступними полями :
// // назва, (тип string)
// // кількість сторінок (числовий тип),
// // жанр (string)
// // автори (тип - масив, кожен елемент масиву - це стрінга)
//
// let books = [{
//     book1: {
//         title: 'історія України',
//         numberOfPages: 852,
//         genre: 'Історія',
//         authors: [
//             'Кінь Микола',
//             'Булка тарас'
//         ]
//     },
//     book2: {
//         title: 'Пригоди буратіно',
//         numberOfPages: 560,
//         genre: 'Казка',
//         authors: [
//             'Льолік',
//             'Болік'
//         ]
//     }
// }];
//
// console.log(books[0].book2.authors[1]);


// // Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // Значення площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s);


// // Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// // результат помістіть у змінну v.
// let heightC =10;
// let dC = 4;
// let v = Math.PI * Math.pow(dC / 2, 2) * heightC;
// console.log(v);


// // У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// // Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let n = 3;
// let m = 4;
// let k =   Math.sqrt(Math.pow(n,2)+ Math.pow(m,2));
// console.log(k);


// // - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// //     В однакових виразах не використовувати однакові оператори!!!
// // 5 ? 6 -> true
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 10 ? 10 -> true
// // 10 ? 10 -> true
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 123 ? '123' -> false
// // 123 ? '123' -> true
//
// let a = 5<6;
//     let b = 5>6;
//     let c = 5===6;
//     let d = 5>=6;
//     let e = 10===10;
//     let f = 10>=10;
//     let g = 10>10;
//     let h = 10<10;
//     let i = 10!==10;
//     let j = 123 === '123';
//     let k = 123!=='123';
// console.log(a,b,c,d,e,f,g,h,i,j,k);