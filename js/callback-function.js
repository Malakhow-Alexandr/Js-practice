// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };
// const fnB = function (number) {
//   console.log('Лог при вызове В ', number);
// };

// fnA('qweqwe', fnB);

// Сделай Математику

// const doMath = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = (x, y) => x + y;
// const sub = (x, y) => x - y;

// doMath(2, 3, add);
// doMath(15, 4, sub);

// doMath(7, 9, (x, y) => x + y);
// doMath(10, 8, (x, y) => x - y);

// Регистрация событий

// const buttonRef = document.querySelector('.js-button');

// callback функция

// const handleBtnClick = () => console.log('Клик по кнопке' + Date.now());
// buttonRef.addEventListener('click', handleBtnClick);

// Анонимная функция
// buttonRef.addEventListener('click', () => console.log('Клик по кнопке' + Date.now()));

// Callback с геопозицией

// const onGetPositionSuccess = position => {
//   console.log(position);
// };
// const onGetPositionError = error => {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// callback С таймаутом Асинхронный JS

// const callback = () => console.log('2 seconds after callback');

// console.log('In code before timeout');
// setTimeout(callback, 2000);
// console.log('In code after timeout');

// Отложеный вызов: http - запрос

// -API URL: https://pokeapi.co/api/v2/pokemon

// const onRequestSuccsess = response => {
//   console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccsess);

// Функция для Фильтрации массива

// const filter = array => {
//     const
//   for (const el of array) {
//     console.log(el);
//   }
// };

// filter([1, 2, 3, 4, 5, 6, 7, 8]);
// filter([1, 2, 3, 4, 5]);
