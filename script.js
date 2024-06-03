document.addEventListener("DOMContentLoaded", () => {
    // Constants
    const constants = {
        E: Math.E,
        LN10: Math.LN10,
        LN2: Math.LN2,
        LOG10E: Math.LOG10E,
        LOG2E: Math.LOG2E,
        PI: Math.PI,
        SQRT1_2: Math.SQRT1_2,
        SQRT2: Math.SQRT2
    };

    // Functions
    const studentNumber = 10; // Replace with the student's number
    const functions = [
        () => Math.abs(-42),
        () => Math.acos(0.5),
        () => Math.acosh(1),
        () => Math.asin(0.5),
        () => Math.asinh(1),
        () => Math.atan(1),
        () => Math.atanh(0.5),
        () => Math.cbrt(27),
        () => Math.ceil(4.2),
        () => Math.cos(Math.PI / 3),
        () => Math.cosh(1),
        () => Math.exp(1),
        () => Math.expm1(1),
        () => Math.floor(4.9),
        () => Math.log(10),
        () => Math.log10(100),
        () => Math.sqrt(-9) // Adding the sqrt function with a negative number to demonstrate NaN
    ];

    // Display constants
    const constantsList = document.getElementById("constants-list");
    for (const [key, value] of Object.entries(constants)) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        constantsList.appendChild(li);
    }

    // Display functions
    const functionsList = document.getElementById("functions-list");
    for (let i = studentNumber; i < studentNumber + 5; i++) {
        const li = document.createElement("li");
        li.textContent = `Function ${i + 1}: y = ${functions[i]()}`;
        functionsList.appendChild(li);
    }

    // Random number generator
    const randomNumber = Math.random();
    const randomResult = document.getElementById("random-result");
    randomResult.textContent = `y = ${randomNumber}`;
});
