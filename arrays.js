// решить три задачи с codewars
//  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// https://www.codewars.com/kata/55b42574ff091733d900002f

// Задача на filter
// 1. Отфильтровать массив только с уникальными хначения используя filter и indexOf()

// 2. Отфильтровать продукты дешевле 15
const products = [
  { name: 'Apple', price: 15 },
  { name: 'Banana', price: 8 },
  { name: 'Cherry', price: 3 },
  { name: 'Grape', price: 22 },
  { name: 'Orange', price: 12 },
]
console.log(products.filter((elem) => elem.price < 15));

// 3. Найти объект с автором В
const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
  { title: 'Book 4', author: 'Author C' },
]

const AuthorB = books.find(book => book.author === 'Author B');
console.log(AuthorB);


// задачи sort

// 4. отсортировать по id
const arr2 = [
  { id: 9, title: 'велосипед', price: 45000 },
  { id: 14, title: 'самокат', price: 15000 },
  { id: 7, title: 'сноуборд', price: 20000 },
  { id: 1, title: 'лыжи', price: 22000 },
  { id: 3, title: 'ролики', price: 18000 },
  { id: 13, title: 'коньки', price: 17000 },
  { id: 4, title: 'скейтборд', price: 19000 },
  { id: 15, title: 'парашют', price: 50000 },
  { id: 8, title: 'гироборд', price: 25000 },
  { id: 6, title: 'сёрфборд', price: 27000 },
  { id: 10, title: 'подводные лыжи', price: 55000 },
  { id: 12, title: 'мотоцикл', price: 65000 },
  { id: 11, title: 'санки', price: 5000 },
  { id: 5, title: 'батут', price: 30000 },
  { id: 2, title: 'катамаран', price: 32000 },
]

arr2.sort((a, b) => a.id - b.id);
console.log(arr2);

// 5. отсортировать объекты по алфавиту
const people = [
  { name: 'Frank', age: 35 },
  { name: 'Eva', age: 22 },
  { name: 'Hannah', age: 31 },
  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'Jack', age: 27 },
  { name: 'Bob', age: 20 },
  { name: 'David', age: 28 },
  { name: 'Grace', age: 29 },
  { name: 'Isaac', age: 23 },
]
people.sort((a, b) => a.name.localeCompare(b.name));

// 6. Отсортиировать по возрасту
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 28 },
  { name: 'Eva', age: 22 },
  { name: 'Frank', age: 35 },
  { name: 'Grace', age: 29 },
  { name: 'Hannah', age: 31 },
  { name: 'Isaac', age: 23 },
  { name: 'Jack', age: 27 },
]

people.sort((a, b) => a.age - b.age);
console.log(people);

// задачи reduce
// 7. найти сумму четных!! чисел массива.
const numbers22 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]

const sumOfEvens = numbers22.reduce((accumulator, currentNumber) => {
  if (currentNumber % 2 === 0) {
    return accumulator + currentNumber;
  }
  return accumulator;
}, 0);

console.log(sumOfEvens);
// 8.  Используя метод reduce найти наибольшее число массива.
const numbers23 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]

const maxNumber = numbers23.reduce((max, currentNumber) => {
  return Math.max(max, currentNumber);
}, numbers23[0]);

console.log(maxNumber);
// 9.reduce найти объект товара с самой высокой ценой.
const arr2 = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]
const productWithHighestPrice = arr2.reduce((maxPriceProduct, currentProduct) => {
  return currentProduct.price > maxPriceProduct.price ? currentProduct : maxPriceProduct;
}, arr2[0]);

console.log(productWithHighestPrice);

// 10. Найти среднюю оценку marks у товара
const arr2 = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]
const totalMarks = arr2.reduce((sum, currentProduct) => {
  return sum + currentProduct.marks.reduce((marksSum, mark) => marksSum + mark, 0);
}, 0);

const averageMarks = totalMarks / (arr2.length * arr2[0].marks.length);

console.log(averageMarks);



//задачи с 7-10 делала с ментором)))
//и я не понимаю почему в некоторых местах горит красным (((((