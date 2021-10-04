const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[0].value>0 && inputs[1].value>0 && inputs[2].value>0) {
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if (sumOfAngles === 180) {
            outputEl.innerText = "Yay, The angles form a triangle."
        } else {
            outputEl.innerText = "Oh Oh! The angles do not form a triangle."
        }
    } else {
        outputEl.innerText = "Enter all the three angles in positive value.";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);