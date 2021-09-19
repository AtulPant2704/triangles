const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if (sides[0].value && sides[1].value) {
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputEl.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse + " cm";
    } else {
        outputEl.innerText = "Enter both the sides."
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);