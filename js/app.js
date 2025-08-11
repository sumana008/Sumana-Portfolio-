// Typing animation
const typedText = document.querySelector(".typing");
const textArray = ["Sumana Bhunia", "a Web Developer", "a Problem Solver"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) type();
});

// Scroll to Top
document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
