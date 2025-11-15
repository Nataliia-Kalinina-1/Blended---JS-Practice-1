// 1 - отримай body елемент і виведи його в консоль;
const body = document.body;
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.getElementById("title");
console.log(title);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll("[data-topic]");
console.log(topics);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const topics1 = document.querySelectorAll("[data-topic]");
const firstTopic = topics1[0];
console.log(firstTopic);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const topics2 = document.querySelectorAll("[data-topic]");
const lastTopic = topics[topics2.length - 1];
console.log(lastTopic);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleMain = document.querySelector("#title");
const nextElement = titleMain.nextElementSibling;
console.log(nextElement);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const headings = document.querySelectorAll("h3");
console.log(headings);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const headingsOther = document.querySelectorAll("h3");

headingsOther.forEach((heading) => {
  heading.style.color = "red";
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigationItem = document.querySelector('li[data-topic="navigation"]');
console.log(navigationItem);

// task-2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.querySelector(".number-container");

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const numberDiv = document.createElement("div");
  numberDiv.classList.add("number");

  const value = randomNumber();
  numberDiv.textContent = value;

  // Додаємо клас залежно від парності
  if (value % 2 === 0) {
    numberDiv.classList.add("even");
  } else {
    numberDiv.classList.add("odd");
  }

  numberContainer.append(numberDiv);
}

// task-3
// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector("input");

input.addEventListener("input", () => {
  event.preventDefault(event);
  const value = input.value.trim();
  console.log(value);
  if (value.length >= 6) {
    input.classList.add("success");
    input.classList.remove("error");
    console.log("success");
  } else {
    input.classList.add("error");
    input.classList.remove("success");
    console.log("error");
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
const newInput = document.querySelector("input");

newInput.addEventListener("focus", () => {
  const value = newInput.value.trim();

  if (value === "") {
    newInput.style.outline = "3px solid red";
    console.log();
  } else {
    newInput.style.outline = "3px solid green";
    console.log();
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
const inputDuringBlur = document.querySelector(input);
inputDuringBlur.addEventListener("blur", () => {});
