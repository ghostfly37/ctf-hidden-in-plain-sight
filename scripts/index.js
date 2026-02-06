import { goToAfter, placeFloatingIcons, glowFloatingIcons, fadeOut, fadeIn, applyButtonSounds } from "./util.js";

function hazeFloatingIcons(toggle) {
    floatingIcons.forEach((floatingIcon) => {
        floatingIcon.style.opacity = toggle ? "0.6" : "1";
        floatingIcon.style.scale = toggle ? "0.9" : "1";
        floatingIcon.style.translate = toggle ? "0 10px" : "0 0";
    });
}

// Elements
const floatingIcons = document.querySelectorAll(".floating-icon");
const outerContainer = document.querySelector(".outer-container");
const startButton = document.querySelector(".start-button");
const fadeOutBlock = document.querySelector(".fade-out-block");

// Event Listeners
applyButtonSounds(['hover', 'start']);
outerContainer.addEventListener('mouseenter', () => hazeFloatingIcons(true));
outerContainer.addEventListener('mouseleave', () => hazeFloatingIcons(false));
startButton.addEventListener('click', () => {
    fadeOut(fadeOutBlock);
    goToAfter("initial-triage", parseInt(fadeOutBlock.dataset.fadeTime));
});

// Floating Icons
placeFloatingIcons();
glowFloatingIcons()

// Fade in
fadeIn();