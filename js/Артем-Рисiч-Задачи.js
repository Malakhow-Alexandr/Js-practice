// 1 Пример Магазин камней Посчитать Общую Сумму

// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 1800,
//       quantity: 2,
//     },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(({ name }) => name.toLowerCase() === stoneName.toLowerCase());
//     if (stone) {
//       const { price, quantity } = stone;
//       return price * quantity;
//     }
//     return 'Empty';
//   },
// };
// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// 2 Пример телефонная книга

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...this.contacts,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '__' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return new Date();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@gmail.com',
//   list: 'friends',
// });

// console.log(phonebook.contacts);

// 3 Пример калькулятор

// const calculator = {
//   read(a = 0, b = 0) {
//     a = Number(a);
//     b = Number(b);
//     if (!isNaN(a) && !isNaN(b)) {
//       this.a = Number(a);
//       this.b = Number(b);
//     } else {
//       alert('please enter value');
//     }
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calculator.read(292, 44);
// console.log(calculator.add());
// console.log(calculator.mult());

// Вивести послідовнысть чисел Fibonachi

function makeFiboNumbers(number) {
  const fiboArray = [];
  let num1 = 0;
  let num2 = 1;
  let nextNumSequence = num1 + num2;

  while (nextNumSequence < number) {
    console.log(nextNumSequence);
    num1 = num2;
    num2 = nextNumSequence;
    nextNumSequence = num1 + num2;
    fiboArray.push(nextNumSequence);
  }
  return fiboArray;
}

const makeFiboArray = makeFiboNumbers(10000);

console.log(makeFiboArray);
