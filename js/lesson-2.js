// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ["jazz", "blues"];
styles.push("rock-n-roll");

console.log(styles);
styles[1] = "classic";
console.log(styles);

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
  const name = prompt("What is your name?");

  if (array.includes(name)) {
    alert(`Welcome, ${name}!`);
  } else {
    alert("User not found");
  }
}
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(numbers) {
  let TotalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }

  return totalSum / numbers.length;
}

//// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function calculateNumbers(someArr) {
  let result = [];

  for (let i = 0; i < someArr.length - 1; i++) {
    const sum = someArr[i] + someArr[i + 1];
    result.push(sum);
  }
  return result;
}
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(calculateNumbers(someArr));

// new task
// Приклад:
// [10, 7, 3, 8] → [3, 4, -5]

function calculateDifference(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    const calc = array[i] - array[i + 1];
    newArray.push(calc);
  }
  return newArray;
}
const array = [10, 7, 3, 8];
console.log(calculateDifference(array));

//task-2
// Напиши функцію, яка повертає новий масив, де кожен елемент подвоєний.

function getNewArray(array2) {
  const arr = [];
  for (let i = 0; i < array2.length; i++) {
    const sum = array2[i] * 2;
    arr.push(sum);
  }
  return arr;
}

const array2 = [2, 4, 6];
console.log(getNewArray(array2));

// Напиши функцію, яка повертає суму всіх елементів масиву.
// [1, 2, 3, 4] → 10

function getSumOfElements(array3) {
  let sum = 0;
  for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
  }
  return sum;
}
const array3 = [1, 2, 3, 4];
console.log(getSumOfElements(array3));

// Створи новий масив, де кожне число замінюється на його квадрат.

function createArray(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * arr[i];
    array.push(result);
  }
  return array;
}
const arr = [1, 2, 3, 4, 5];
console.log(createArray(arr));

// Напиши функцію, яка повертає масив тільки з парних чисел.
function getEvenArray(array23) {
  const arr = [];
  for (let i = 0; i < array23.length; i++) {
    if (array23[i] % 2 === 0) {
      arr.push(array23[i]);
    }
  }
  return arr;
}

const array23 = [2, 4, 7, 8, 9, 10, 12, 23, 24];
console.log(getEvenArray(array23));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  let minNumber;

  if (Array.isArray(numbers)) {
    minNumber = Math.min(...numbers);
  } else {
    return `It's not an array`;
  }
  return minNumber;
}
const numbers = [10, 1, 81, 4, 31, 56];
console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
  const str = string.split(" ");
  let longestWord = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length) {
      longestWord = str[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("London is the capital of Great Britain"));

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = !true;

function getData(user) {
  const result = [];
  const keys = Object.keys(user);
  for (const key of keys) {
    result.push(`${key}: ${user[key]`});
    }
    return ${ key }:${ value };
}

console.log(user);

console.log(getData(user));
