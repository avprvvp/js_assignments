// №1
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert('Первое число больше 0.7');
}

// №2
const array = [1, 2, 5, 8, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (const element of array) {
    console.log(element);
}

// №3
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// №4
const randomNumber1 = Math.random();

if (randomNumber > 0.7 && randomNumber1 > 0.7) {
    alert('Оба числа больше 0.7');
}

if (randomNumber <= 0.2 || randomNumber1 <= 0.2) {
    alert('Хотя бы одно число не больше 0.2');
}