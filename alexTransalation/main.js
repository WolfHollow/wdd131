import alphabet from "./alphabet.js";

// logo change
var images = [], x = -1;
    images[0] = "image/alex's caves tablets black.png";
    images[2] = "image/alex's caves tablets blue.png";
    images[1] = "image/alex's caves tablets brown.png";
    images[3] = "image/alex's caves tablets green.png";
    images[5] = "image/alex's caves tablets pink.png";
    images[4] = "image/alex's caves tablets yellow.png";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("logo").src = images[x];
    document.getElementById("logo2").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 1000);
    }

window.onload = startTimer;
// end logo change

const inputTextArea = document.getElementById('inputText');
const outputTextArea = document.getElementById('outputText');

function translateToCaveScript(inputText) {
    const upperInput = inputText.toUpperCase();
    let outputHTML = '';
    for (let char of upperInput) {
        const letterObj = alphabet.find(item => item.letter === char);
        if (letterObj) {
            outputHTML += `<img src="${letterObj.cavescript}" alt="${char}" class="cave-letter"> `;
        } else if (char === ' ') {
            outputHTML += `<span class="cave-space"></span>`;
        }
    }
    return outputHTML;
}

inputTextArea.addEventListener('input', () => {
    const inputText = inputTextArea.value;
    const caveScriptHTML = translateToCaveScript(inputText);
    outputTextArea.innerHTML = caveScriptHTML;
});

// Makes buttons
const keyboardbtns = alphabet.map(item => {
    return `<button class="keyboard-btn" data-letter="${item.letter}"><img src="${item.cavescript}" alt="${item.letter}"></button>`;
}).join('');

const keyboardDiv = document.getElementById('keyboard');
keyboardDiv.innerHTML = keyboardbtns;

// Use buttons
keyboardDiv.addEventListener('click', (event) => {
    if (event.target.closest('.keyboard-btn')) {
        const button = event.target.closest('.keyboard-btn');
        const letter = button.getAttribute('data-letter');
        inputTextArea.value += letter;
        const caveScriptHTML = translateToCaveScript(inputTextArea.value);
        outputTextArea.innerHTML = caveScriptHTML;
    }
});






