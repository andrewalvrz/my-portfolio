// Smooth Scroll Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Add click event listeners for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1); // Remove the "#" from the href
        scrollToSection(targetId);
    });
});

// Typing effect
const phrases = ["I am Andrew Alvarez ", "I am a Full Stack developer.", "Embedded Developer", "Student."];
let i = 0;
let j = 0;
let currentPhrase = [];
const typingSpeed = 100;
const erasingSpeed = 50;
const typingText = document.getElementById("typing-text");

function loopTyping() {
    if (i < phrases.length) {
        if (j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            typingText.textContent = currentPhrase.join("");
            setTimeout(loopTyping, typingSpeed);
        } else {
            setTimeout(() => {
                loopErasing();
            }, 1000);
        }
    } else {
        i = 0;
        loopTyping();
    }
}

function loopErasing() {
    if (j > 0) {
        currentPhrase.pop();
        j--;
        typingText.textContent = currentPhrase.join("");
        setTimeout(loopErasing, erasingSpeed);
    } else {
        i++;
        loopTyping();
    }
}

loopTyping();

// Progress Bar Animation
const progressBar = document.getElementById("progress-bar");
setTimeout(() => {
    progressBar.style.width = "46%";
}, 500);
