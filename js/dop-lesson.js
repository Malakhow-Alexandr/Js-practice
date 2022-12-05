// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };

// function checkKeyOption(key) {
//   console.log(Object.keys(obj)[0]);
//   let status = false;
//   return Object.keys(obj) === key;
//   Object.keys(obj).forEach(elem => {
//     if (elem === key) {
//       status = true;
//     }
//   });
// }
// console.log(checkKeyOption('name'));

// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.

// const checkType = value => {
//   if (value === null) {
//     return 'null';
//   } else if (Array.isArray(value)) {
//     return 'Array';
//   }
//   return typeof value;
// };

// console.log(checkType(1));
// console.log(checkType({}));
// console.log(checkType(true));
// console.log(checkType([]));
// console.log(checkType('2'));
// console.log(checkType(null));

// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// const multiplyNumeric = obj => {
//   for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// };
// multiplyNumeric(menu);

// console.log(menu);

//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

// function calcTotalSalaries(salaries) {
//   const allNumbers = Object.values(salaries);
//   let totalSalaries = 0;
//   for (const number of allNumbers) {
//     totalSalaries += number;
//   }

//   return totalSalaries;
// }
// calcTotalSalaries(salaries);

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };
// ???
// function calcTotalSalaries(salaries) {
//   const allNumbers = Object.values(salaries);
//   allNumbers.reduce((sum, number) => {
//     return;
//     sum + number;
//   }, 0);
// }

// console.log(calcTotalSalaries(salaries));
// ???

//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 6 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 150, quantity: 100 },
// ];

// // function calcTotalPrice(stones, stonesName) {
// //   for (const stone of stones) {
// //     const { name, price, quantity } = stone;
// //     if (name === stonesName) {
// //       return price * quantity;
// //     }
// //   }
// //   return 'Ну нету такого камушка ';
// // }
// function calcTotalPrice(stones, stonesName) {
//   const activeItem = stones.find(item => item.name === stonesName);
//   if (activeItem) {
//     return activeItem.price * activeItem.quantity;
//   }
// }

// calcTotalPrice(stones, 'Diamond');
// console.log(calcTotalPrice(stones, 'Diamond'));

// Напишіть код, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr = deleteElement(arr, 56);
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

// function deleteElement(arr, del) {
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//     if (arr[i]) { }
//   }
// }

// 1; // Переведіть текст вигляду border-left-width до borderLeftWidth
// // Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
// //
// // Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
// //

// // camelize("background-color") == 'backgroundColor';
// // camelize("list-style-image") == 'listStyleImage';
// // camelize("-webkit-transition") == 'WebkitTransition';

// const makeCamelize = (str, callback) => {
//   const strArr = str
//     .split('-')
//     .map((item, index) => {
//       if (index !== 0) {
//         return callback(item);
//       } else {
//         return item;
//       }
//     })
//     .join('');
//   console.log(strArr);
// };

// const changeFirstLetterToUpperCase = str => {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// };

// makeCamelize('background-color', changeFirstLetterToUpperCase);
// makeCamelize('list-style-image', changeFirstLetterToUpperCase);

// 2

// Напишіть дві функції
// makeProduct(назва, ціна, callback) - приймає
// ім`я і ціну товару, а також функцію callback.
// Функція створює об'єкт товару, додає йому унікальний
// ідентифікатор у властивості id і викликає зворотний виклик
// передаючи йому створений об’єкт.
// showProduct(product) - callback приймає об'єкт
// продукта і виводить його в консоль

// const makeProduct = (name, price, callbak) => {
//   const product = {
//     id: Date.now(),
//     price,
//     name,
//   };
//   callbak(product);
// };

// const showProduct = product => {
//   console.log(product);
// };

// makeProduct('telefon', 12000, showProduct);

// 3.

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// const each = (array, callback) => {
//   return array.map(element => element * callback);
// };

// console.log(each([12, 14, 16], 2));

// 4.
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };
// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeShef = shefName => {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };

// const bobr = makeShef('bobr');

// bobr('dich');

// const powerBobr = makeShef('Power Bobr');
// powerBobr('Lazania');

// 5
// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter


