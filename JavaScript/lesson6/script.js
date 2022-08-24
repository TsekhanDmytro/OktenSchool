// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let text = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const string of text) {
//     console.log(string.length);
// }

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let text2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const string of text2) {
//     console.log(string.toUpperCase());
// }

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let text3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (const string of text3) {
//     console.log(string.toLowerCase());
// }

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let strClear = str.trim();
// console.log(strClear);

// // - Напишіть функцію (str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToarray=(str)=>{
//     return str.split(' ')
// };
// let arr= stringToarray(str);
// console.log(arr);

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let newArr= arr.map(value =>value.toString())
// console.log(newArr)



// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         console.log(arr.sort((a, b) => a - b));
//     } else if (direction === 'descending') {
//         console.log(arr.sort((a, b) => b - a));
//     }
// };
// sortNums(nums, 'descending');

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let newCoursesAndDurationArray =(coursesAndDurationArray.filter(value =>value.monthDuration>=5))
// console.log(newCoursesAndDurationArray);

