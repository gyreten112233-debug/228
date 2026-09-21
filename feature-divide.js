function divide(a, b) {
    if (b === 0) {
        console.log("Ошибка: деление на ноль невозможно!");
        return null;
    }
    const result = a / b;
    console.log(`Результат деления: ${a} / ${b} = ${result}`);
    return result;
}
