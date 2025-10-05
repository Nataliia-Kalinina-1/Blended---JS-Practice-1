// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const totalMinutes = Number(prompt(`Enter the number`));

function getTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const modifiedHours = String(hours).padStart(2, "0");
  const minutes = totalMinutes % 60;
  const modifiedMinutes = String(minutes).padStart(2, "0");
  return `${modifiedHours}:${modifiedMinutes}`;
}
console.log(getTime(totalMinutes));

//Напишіть код, який розраховує кінцеву вартість доставки.

// Запросіть у користувача вагу посилки в кілограмах за допомогою prompt().

// Визначте вартість доставки за такими правилами:

// Якщо вага посилки менше або дорівнює 5 кг, вартість доставки складає 25 кредитів.

// Якщо вага більше 5 кг, але менше або дорівнює 20 кг, вартість складає 50 кредитів.

// Якщо вага більше 20 кг, вартість розраховується як 50 кредитів + 2 кредити за кожен кілограм понад 20 кг.

// Виведіть кінцеву вартість у alert().

const parcelWeight = Number(
  prompt("Please enter your parcel weight in kg here")
);

function getFinalPrice(parcelWeight) {
  let price;

  if (parcelWeight <= 5) {
    price = 25;
  } else if (parcelWeight > 5 && parcelWeight <= 20) {
    price = 50;
  } else if (parcelWeight > 20) {
    price = 50 + (parcelWeight - 20) * 2;
  } else {
    return `please enter valid value`;
  }

  return `Please pay ${price}credits`;
}

console.log(getFinalPrice(10)); //
console.log(getFinalPrice(25)); //
console.log(getFinalPrice("abc"));

//task-5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt("Please enter your login");
if (login === "Адмін") {
  const password = prompt("Please enter your password");
  if (password === "Я головний") {
    alert("Добрий день!");
  } else {
    alert("Невірний пароль!");
  }
} else if (login === "" || login === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let i = 0;
let number = 20;
while (i <= number) {
  console.log(i);
  i += 1;
}

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let sumOfEvens = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);

    if (i % 2 === 0) {
      sumOfEvens += i;
    }
  }
  return sumOfEvens;
}

// Завдання 1: Фільтрація чисел 🔢
// Напишіть функцію filterNumbers(start, end), яка приймає два параметри — мінімальне та максимальне число. У циклі переберіть всі числа від start до end і порахуйте:

// Скільки з них є парними.

// Скільки з них є непарними.

// Функція повинна повертати рядок, що містить обидва результати, наприклад: "Парних: 5, Непарних: 5".

function filterNumbers(start, end) {
  let countOdds = 0;
  let countEvens = 0;

  for (let i = start; i <= end; i++) {
    console.log(i);

    if (i % 2 === 0) {
      countEvens++;
    } else {
      countOdds++;
    }
  }
  return `Парних: ${countEvens}, Непарних: ${countOdds}`;
}
console.log(filterNumbers(1, 10));

// Завдання 2: Розрахунок середнього арифметичного 🎓
// Напишіть функцію getAverage(start, end), яка приймає два параметри.

// У циклі переберіть всі числа від start до end.

// Знайдіть суму всіх цих чисел.

// Порахуйте, скільки всього чисел у цьому діапазоні.

// Поділіть суму на кількість чисел, щоб отримати середнє арифметичне.

// Функція має повернути середнє арифметичне.

function getAverage(start, end) {
  let sumOfNumbers = 0;
  for (let i = start; i <= end; i++) {
    sumOfNumbers += i;
  }
  const totalNumbers = end - start + 1;
  const sumAverage = sumOfNumbers / totalNumbers;

  return sumAverage;
}
console.log(getAverage(1, 10));

// Ви успішно впоралися з усіма основними концепціями. Давайте перейдемо до останнього завдання з цього списку:

// Напишіть функцію calculateTotal(itemsCount, itemPrice), яка приймає кількість товарів та їхню ціну.

// У циклі підрахуйте загальну суму покупки.

// Якщо загальна сума перевищує 500, застосуйте знижку 15%.

// В іншому випадку, знижки немає.

// Функція повинна повертати кінцеву суму до сплати.

function calculateTotal(itemsCount, itemPrice) {
    const totalPrice = itemsCount * itemPrice;

    if (totalPrice > 500) {return totalPrice * 0.85} else {return totalPrice}
}