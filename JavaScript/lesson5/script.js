// // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let areaRectangle= (a,b)=> a*b;
// console.log(areaRectangle(5, 5));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// let area_circ= (r)=>(Math.PI * Math.pow(r, 2) );
// console.log(area_circ(5));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let arrea_cylinder= (h, r)=>(Math.PI * Math.pow(r / 2, 2) * h)
// console.log(arrea_cylinder(10, 5))

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let log_arr= (arr)=>{
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }}
// let arrey = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// log_arr(arrey);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par=(text)=>{
//     document.write(`<p> ${text} </p>`);
// };
// par ('asasdasd');
// par (5464);

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (text) => {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// };
// list('asd');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// };
// list('asd', 20);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list_arr = (arr)=>{
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//         document.write(`</ul>`);
// };
// let arrey = [2, 'text', true, 6, 22, 'asd', 45, 'qwe', false, -18];
// list_arr(arrey);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'Dima', age: 26},
//     {id: 2, name: 'Olya', age: 17},
//     {id: 3, name: 'Vasya', age: 20},
//     {id: 4, name: 'Ivan', age: 33},
//     {id: 5, name: 'Taras', age: 16}
// ];
// let iter_arr = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>Id: ${arrElement.id} Name: ${arrElement.name},  Age: ${arrElement.age},  </div>`);
//     }
// };
// iter_arr(users);

// // - створити функцію яка повертає найменьше число з масиву
// let arrey = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let min_num=(arr)=>{
//         let x= arr[0];
//     for (const arrElement of arr) {
//         if (arrElement<x)x = arrElement
//     }
//         return x;
//
// }
// console.log(min_num(arrey));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrey = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let sum=(arr)=>{
//         let sum = 0;
//     for (const arrElement of arr) {
//         if (sum !== arrElement) sum = sum+ arrElement
//     }
//     return sum;
// }
// console.log(sum(arrey));