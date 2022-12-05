// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   descreaseQuantite(productName) {},
// };

// cart.add({ name: 'apple', price: 70 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'grape', price: 65 });
// cart.add({ name: 'strawberry', price: 65 });

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = this.items[i];
//       if (productName === name) {
//         console.log(`We found ${productName}`);
//         console.log('index-', i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const { price, quantity } of this.items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   descreaseQuantite(productName) {},
// };

// cart.add({ name: 'apple', price: 70 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'grape', price: 65 });
// cart.add({ name: 'strawberry', price: 65 });
// cart.add({ name: 'strawberry', price: 65 });
// cart.add({ name: 'strawberry', price: 65 });
// cart.add({ name: 'strawberry', price: 65 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// // cart.remove('grape');

// // console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());
