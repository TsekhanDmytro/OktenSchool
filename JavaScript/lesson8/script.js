// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [];
// users[0] = new User(1, 'Dima', 'Tsekhan', 'domeno@gmail.com', +380502231955);
// users[1] = new User(2, 'Tanya', 'Pypcin', 'kkkk@gmail.com', +380502231944);
// users[2] = new User(3, 'Taras', 'Azaza', 'tttto@gmail.com', +380502231977);
// users[3] = new User(4, 'Oleg', 'Tsn', 'qqqqqno@gmail.com', +380502237755);
// users[4] = new User(5, 'Ivan', 'An', 'ljljj@gmail.com', +380502252551);
// users[5] = new User(6, 'Stepan', 'Mops', 'asjkjeno@gmail.com', +380505331955);
// users[6] = new User(7, 'Nadia', 'Item', 'dortro@gmail.com', +380502238555);
// users[7] = new User(8, 'Lara', 'Korova', 'dzxco@gmail.com', +380502234955);
// users[8] = new User(9, 'Dima', 'Qanal', 'asdasd@gmail.com', +380502235555);
// users[9] = new User(10, 'Pavlo', 'Legs', 'asd@gmail.com', +380502231999);
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(value => value.id % 2===0));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));

// ----------------------------------------------------------------------------------------------------------------------------------------

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     };
// }
//
// let usersArr = [];
// usersArr[0] = new Client(1, 'Vasya', 'Pupcin', 'domeno@gmail.com', +380502231955, ['bulka', 'fanta', 'ags', 'bread', 'tee', 'snikers']);
// usersArr[1] = new Client(1, 'Vasya', 'Pupcin', 'domeno@gmail.com', +380502231955, [ 'bulka', 'fanta', 'ags', 'tee', 'snikers']);
// usersArr[2] = new Client(3, 'Taras', 'Azaza', 'tttto@gmail.com', +380502231977, ['cola', 'bulka', 'fanta']);
// usersArr[3] = new Client(4, 'Oleg', 'Tsn', 'qqqqqno@gmail.com', +380502237755, ['cola', 'ags', 'bread', 'tee', 'snikers']);
// usersArr[4] = new Client(5, 'Ivan', 'An', 'ljljj@gmail.com', +380502252551, ['fanta', 'ags', 'cocs']);
// usersArr[5] = new Client(6, 'Stepan', 'Mops', 'asjkjeno@gmail.com', +380505331955, ['snikers']);
// usersArr[6] = new Client(7, 'Nadia', 'Item', 'dortro@gmail.com', +380502238555, ['cola', 'bulka', 'fanta', 'bread', 'tee', 'snikers']);
// usersArr[7] = new Client(8, 'Lara', 'Korova', 'dzxco@gmail.com', +380502234955, ['cola', 'bulka']);
// usersArr[8] = new Client(9, 'Dima', 'Qanal', 'asdasd@gmail.com', +380502235555, []);
// usersArr[9] = new Client(10, 'Pavlo', 'Legs', 'asd@gmail.com', +380502231999, ['cola', 'bulka', 'fanta', 'tee', 'snikers']);
// console.log(usersArr);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// usersArr.sort((a, b) => a.order.length - b.order.length);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна.
// function Car(model, manufacturer, yearOfManufacture, maxSpeed, capacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
// // додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         return document.write(
//             `<p>модель--- ${this.model}</p>
//             <p>виробник--- ${this.manufacturer}</p>
//             <p>рік випуску--- ${this.yearOfManufacture}</p>
//             <p>максимальна швидкість--- ${this.maxSpeed}</p>
//             <p>об'єм двигуна--- ${this.capacity}</p>`);
//     };
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = maxSpeed + newSpeed;
//         console.log(`нова максимальна швидкість ${this.maxSpeed}`);
//     };
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.yearOfManufacture = newValue;
//         console.log(`новий рік випуску ${this.yearOfManufacture}`);
//     };
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car('BMW', 'England', 2011, 250, 3.5);
// car.drive();
// car.info();
// car.increaseMaxSpeed(555);
// car.changeYear(2022);
// car.addDriver({name: 'Dima', age: 27});


// ---------------------------------------------------------------------------------------

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class NawCar {
//     constructor(model, manufacturer, yearOfManufacture, maxSpeed, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//     }
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info() {
//         document.write(
//             `<p>модель--- ${this.model}</p>
//             <p>виробник--- ${this.manufacturer}</p>
//             <p>рік випуску--- ${this.yearOfManufacture}</p>
//             <p>максимальна швидкість--- ${this.maxSpeed}</p>
//             <p>об'єм двигуна--- ${this.capacity}</p>`);
//     };
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`нова максимальна швидкість ${this.maxSpeed}`);
//     };
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue) {
//         this.yearOfManufacture = newValue;
//         console.log(`новий рік випуску ${this.yearOfManufacture}`);
//     };
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// //
// let car = new NawCar('BMW', 'England', 2011, 250, 3.5);
// car.drive()
// car.info()
// car.increaseMaxSpeed(555)
// car.changeYear(2022)
// car.addDriver({name: 'Dima', age: 33})

//----------------------------------------------------------------------------------------------------------------------------------

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     };
//
// }
//
// let cinderella1 = new Cinderella('Vika', 12, 34);
// let cinderella2 = new Cinderella('Tanya', 20, 35);
// let cinderella3 = new Cinderella('Olya', 18, 33);
// let cinderella4 = new Cinderella('Sasha', 16, 38);
// let cinderella5 = new Cinderella('Anna', 31, 37);
// let cinderella6 = new Cinderella('Katya', 25, 34);
// let cinderella7 = new Cinderella('Lama', 19, 35);
// let cinderella8 = new Cinderella('Rika', 20, 36);
// let cinderella9 = new Cinderella('Nadya', 18, 35);
// let cinderella10 = new Cinderella('Switlana', 16, 37);
// let cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince extends Cinderella {
//     constructor(name, age, shoe) {
//         super();
//         this.shoe = shoe;
//     };
//
//     // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     fainderCinderellas(Cinderellas) {
//         for (const cinderella of Cinderellas) {
//             if (cinderella.size === prince.shoe && cinderella.age >= 18) {
//                 console.log(`Моя попелюшка це ${cinderella.name}`);
//             }
//         }
//     };
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//     fainderCinderellas2(cinderellas) {
//         for (const cinderella of cinderellas) {
//            if (cinderellas.find(value => cinderella.size=== prince.shoe)){
//             console.log(`Моя попелюшка це ${cinderella.name}`);}
//         }
//     };
// }
// let prince = new Prince('Dima', 27, 36);
// prince.fainderCinderellas(cinderellas);
// prince.fainderCinderellas2(cinderellas);
