const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(){
    const productOfSides = Number(sides[0].value) * Number(sides[1].value);
    const area = 0.5 * productOfSides;
    outputEl.innerText = "The area of the triangle is " + area + "cm²";
}

areaBtn.addEventListener("click",calculateArea);