// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let x = 'text';
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${x} ${[i]}</div>`);
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let y = 'text';
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${y} ${[i]} </h1>`);
//     i++;
// }

// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
// //     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
// //
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`)

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
// document.write(`<div class="product-card">`)
// document.write(`<h3 class="product-title"> ${product.title} ${product.price} </h3>`)
//     document.write(`<img src="${product.image}" alt="product" class="product-image">`)
// document.write(`</div>`)
// }
// --------------------
// //     є масив
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (const user of users) {
//     if (user.status === true) {
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (user.status === false) {
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (user.age < 30) {
//         console.log(user);
//     }
// }


// // -----------------------------------additional-----------------------------------
// //--створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// //
// let arr = [
//     {name: 'Dima', age: 26, status: true},
//     {name: 'Olya', age: 17, status: false},
//     {name: 'Vasya', age: 20, status: true},
//     {name: 'Ivan', age: 33, status: true},
//     {name: 'Taras', age: 16, status: false}
//     ];
// console.log(arr);

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0]= 'test';
// arr[1]= 15;
// arr[2]= false;
// arr[3]= [];
// arr[3][0]= 456;
// arr[4]= {};
// console.log(arr);

// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
// // 1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i <arr.length){
//     console.log(arr[i]);
//  i++;
// }

// //     2. перебрати його циклом for
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (const number of arr) {
//     console.log(number)
// }

// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     if (i % 2 === 1) {
//     console.log(arr[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//    if (i% 2 === 1){
//        console.log(arrElement);
//    }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 1;
// while (i < arr.length) {
//     if (i % 2 === 0) {
//     console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 1; i < arr.length; i++) {
//     const arrElement = arr[i];
//    if (i% 2 === 0){
//        console.log(arrElement);
//    }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (const number of arr) {
//     if (number %3===0){
//         console.log('okten');
//     }
//     else console.log(number);
// }

// 8. вивести масив в зворотньому порядку.
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    const arrElement = arr[i];
    console.log(arrElement);
}









// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор


