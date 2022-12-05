// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += '-1';
// }
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total = 0;

// for (const product of cart) {
//   console.log(product);
//   total += product;
// }
// console.log(total);

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
//   console.log(cart[i]);
//   total += cart[i];
// }
// console.log(total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// let total = 0;
// создать переменную

// перебрать цыклом масив сделать остаток от деления

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     // console.log('Как бы не парные числа', numbers[i]);
//     continue;
//   } else {
//     total += numbers[i];
//     console.log('Как бы парные числа', numbers[i]);
//   }
// }
// console.log(total);

// for (const number of numbers) {
//   numbers[i] % 2 !== 0 ?
//     // console.log('Как бы не парные числа', numbers[i]);
//     continue;
//   } else {
//     total += numbers[i];
//     console.log('Как бы парные числа', numbers[i]);
//   }
// }
// console.log(total);

// const max = 90;
// const min = 33;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
//   console.log('Четное число', i);
// }
// console.log('Сумма парных чисел', total);

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// while (true) {
//   const number = prompt('Введыть число, більше 100');
//   if (number > 100) {
//     break;
//   }
// }

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// // for (let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];
// //   if (login === loginToFind) {
// //     message = `Пользователь ${loginToFind} найден.`;
// //     break;
// //   }
// // }
// // console.log(message);

// // for (const login of logins) {
// //   if (login === loginToFind) {
// //     message = `Пользователь ${loginToFind} найден.`;
// //     break;
// //   }
// // }
// // console.log(message);
// message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;
// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);
