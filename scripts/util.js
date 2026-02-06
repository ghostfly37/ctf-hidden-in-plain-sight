// Functions
export function goToAfter(name, timeDelay) {
    let path;
    if (path !== "index") {
        path = getRelativePath(`./pages/${name}.html`);
    } else {
        path = getRelativePath(`./${name}.html`);
    }
    setTimeout(() => window.location.assign(path), timeDelay);
}

function getRelativePath(path) {
    return (window.location.pathname.endsWith("index.html") ? "" : ".") + path;
}

export function placeFloatingIcons() {
    const floatingIcons = document.querySelectorAll(".floating-icon");
    floatingIcons.forEach((floatingIcon) => {
        floatingIcon.style.bottom = floatingIcon.dataset.bottom;
        floatingIcon.style.right = floatingIcon.dataset.right;
        floatingIcon.style.rotate = floatingIcon.dataset.rotate;
    });
}

export function glowFloatingIcons() {
    const floatingIcons = document.querySelectorAll(".floating-icon");
    const defaultTextShadow = window.getComputedStyle(floatingIcons[0]).textShadow;
    const glowTextShadow = "0 0 10px rgba(0 255 0 / 0.6)";
    let floatingIconsGlow = false;
    setInterval(() => {
        floatingIcons.forEach((floatingIcon) => {
            floatingIcon.style.textShadow = floatingIconsGlow ? glowTextShadow : defaultTextShadow;
        });
        floatingIconsGlow = !floatingIconsGlow;
    }, 900);
}

export function fadeOut() {
    const fadeOutBlock = document.querySelector(".fade-out-block");
    fadeOutBlock.style.opacity = 1;
    fadeOutBlock.style.zIndex = 10;
}

export function fadeIn() {
    const fadeInBlock = document.querySelector(".fade-in-block");
    fadeInBlock.style.opacity = 0;
    setTimeout(() => { fadeInBlock.style.zIndex = -1000; }, fadeInBlock.dataset.fadeTime);
}

export function applyButtonSounds(sounds) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        sounds.forEach((sound) => {
            let selectedSound, selectedEvent;
            switch (sound) {
                case "hover":
                    selectedEvent = "mouseenter";
                    selectedSound = buttonHoverSound;
                    break;
                case "start":
                    selectedEvent = "click";
                    selectedSound = buttonStartSound;
                    break;
            }
            button.addEventListener(selectedEvent, () => {
                selectedSound.play().catch(() => { });
            });
        });
    });
}

export function verifyDecodedInput(codeDecoded, successPath) {
    const decodedInput = document.querySelector(".decoded-input");
    const fadeOutBlock = document.querySelector(".fade-out-block");
    if (decodedInput.value.trim().toLowerCase() === codeDecoded.toLowerCase()) {
        successSound.play();
        fadeOut(fadeOutBlock);
        goToAfter(successPath, parseInt(fadeOutBlock.dataset.fadeTime));
    }
    else {
        failureSound.play();
        decodedInput.classList.add('input-failure');
    }
}

export function typingAnimationifyElement(element, text, timeDelay) {
    const previousInnerHTML = element.innerHTML;
    let index = 0;
    const interval = setInterval(() => {
        element.innerHTML = previousInnerHTML + text.slice(0, index + 1);

        index++;
        if (text.charAt(index) === "<") {
            console.log(123);
            while (text.charAt(index) !== ">") {
                index++;
            }
        }

        if (index == text.length) {
            clearInterval(interval);
        }
    }, timeDelay);
}

export function applyDownloadSounds(elements) {
    elements.forEach((element) => element.addEventListener('click', () => {
        downloadSound.play().catch((e) => { console.log(e); });
    }));
}

// Sounds
const buttonHoverSound = new Audio(getRelativePath("./assets/sounds/button-hover.wav"));
const buttonStartSound = new Audio(getRelativePath("./assets/sounds/button-start.wav"));
const successSound = new Audio(getRelativePath("./assets/sounds/success.flac"));
const failureSound = new Audio(getRelativePath("./assets/sounds/failure.wav"));
const downloadSound = new Audio(getRelativePath("./assets/sounds/download.wav"));
