const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== МЕНЮ КАЛЬКУЛЯТОРА ===");
console.log("1. Ввести два числа");
console.log("2. Выполнить сложение");
console.log("3. Выполнить вычитание");
console.log("4. Выполнить деление");
console.log("5. Возвести число в степень");
console.log("0. Выход");
