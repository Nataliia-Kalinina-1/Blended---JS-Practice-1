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
