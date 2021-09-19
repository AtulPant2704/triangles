const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea() {
    if (sides[0].value && sides[1].value) {
        const productOfSides = Number(sides[0].value) * Number(sides[1].value);
        const area = 0.5 * productOfSides;
        outputEl.innerText = "The area of the triangle is " + area + "cm²";
    } else {
        outputEl.innerText = "Enter both the sides."
    }
}

areaBtn.addEventListener("click", calculateArea);