// JavaScript code
const textElement = document.getElementById("typing-text");
const words = ["Web Developer", "Full Stack Developer", "MERN Stack Developer"];
let wordIndex = 0;
let letterIndex = 0;
let typingDelay = 150;
let erasingDelay = 100;
let newTextDelay = 2000;

function type() {
    if (letterIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (letterIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (words.length) {
        setTimeout(type, newTextDelay + 250);
    }
});
