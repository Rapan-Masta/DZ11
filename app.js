let Anumber = prompt("Вкажіть своє число");
let Bnumber = Anumber ** 2;
alert(`Ваше число в квадраті буде ${Bnumber}`);

let userName = prompt("Ваше ім'я?", "Вася");
let userSum = prompt("Ваша сумма на депозиті?", "2000");
let userDataDepozit = prompt(
  "Скільки місяців хочете тримати сумму на депозиті?",
  "12"
);

let profit;
profit = ((userSum * 20) / 100 / 12) * userDataDepozit;

alert(
  `Шановний ${userName}, 
Ви внесли ${userSum} грн., під 20% річних, 
на трермін ${userDataDepozit} місяців. 
За цей період часу Ви заробите ${profit} грн.`
);

let a = +prompt("Ваше число А?", 5);
let b = +prompt("Ваше число В", 4);

let sumAB = a + b;
let differenceAB = a - b;
let multiplicationAB = a * b;
let divisionAB = a / b;

alert(`Сумма чисел: ${sumAB}
Різниця чисел: ${differenceAB}
Множення чисел: ${multiplicationAB}
Ділення чисел: ${divisionAB}`);
