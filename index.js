let num1 = 0;
let num2 = 0;

function inputNumbers(callback) {
    rl.question("Введите первое число: ", (a) => {
        num1 = parseFloat(a);
        rl.question("Введите второе число: ", (b) => {
            num2 = parseFloat(b);
            console.log(`Числа сохранены: num1 = ${num1}, num2 = ${num2}`);
            if (callback) callback();
        });
    });
}
