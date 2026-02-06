import { fadeIn, placeFloatingIcons, glowFloatingIcons, applyButtonSounds, verifyDecodedInput, typingAnimationifyElement, applyDownloadSounds } from "./util.js";

// Functions
export function setTerminal(codeEncoded) {
    typingAnimationifyElement(terminalText, codeEncoded, 100)
    copyTextIcon.addEventListener('click', () => navigator.clipboard.writeText(codeEncoded));
}

export function setInputEventListeners(codeDecoded, nextLevel) {
    submitDecodedInput.addEventListener('click', () => verifyDecodedInput(codeDecoded, nextLevel));
    decodedInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            verifyDecodedInput(codeDecoded, nextLevel);
        }
    });
}

// Elements
const copyTextIcon = document.querySelector(".js-copy-text");
const terminalText = document.querySelector(".terminal-text");
const decodedInput = document.querySelector(".decoded-input");
const submitDecodedInput = document.querySelector(".submit-decoded-input");
const downloadLinks = document.querySelectorAll("a");

// Event Listeners
applyButtonSounds(['hover']);
applyDownloadSounds(downloadLinks);
decodedInput.addEventListener('keydown', () => decodedInput.classList.remove('input-failure'))

// Floating Icons
placeFloatingIcons();
glowFloatingIcons()

// Fade in
fadeIn();