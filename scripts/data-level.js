import { fadeIn, placeFloatingIcons, glowFloatingIcons, applyButtonSounds, goToAfter, fadeOut, typingAnimationifyElement, applyDownloadSounds } from "./util.js";

// Functions
export function setTerminal(dataLabel) {
    typingAnimationifyElement(terminalText, dataLabel, 100)
}

export function setInputEventListeners(successPath) {
    const fadeOutBlock = document.querySelector(".fade-out-block");
    const successSound = new Audio("../assets/sounds/success.flac");
    nextInput.addEventListener('click', () => {
        successSound.play()
        fadeOut(fadeOutBlock);
        goToAfter(successPath, parseInt(fadeOutBlock.dataset.fadeTime));
    });
}

// Elements
const terminalText = document.querySelector(".terminal-text");
const nextInput = document.querySelector(".next-input");
const downloadLinks = document.querySelectorAll("a");

// Event Listeners
applyButtonSounds(['hover']);
applyDownloadSounds(downloadLinks);

// Floating Icons
placeFloatingIcons();
glowFloatingIcons()

// Fade in
fadeIn();