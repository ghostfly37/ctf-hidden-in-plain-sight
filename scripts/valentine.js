function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placeHearts() {
    const heartsContainer = document.querySelector(".hearts-container");
    let innerHTML = "";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 40; j++) {
            innerHTML += `<i class="bxf bx-${i == 0 ? "heart" : "fish-alt"
                } bx-2xl bg-heart"></i>`;
        }
    }
    heartsContainer.innerHTML = innerHTML

    const hearts = document.querySelectorAll(".bg-heart")
    hearts.forEach(heart => {
        heart.style.top = `${randInt(0, window.innerHeight - 50)}px`;
        heart.style.left = `${randInt(0, window.innerWidth - 50)}px`;
    });
}

function animateHearts() {
    let hearts = document.querySelectorAll(".bg-heart");
    hearts.forEach(heart => {
        heart.direction = Math.random() < 0.5 ? -1 : 1;
        setInterval(() => {
            heart.style.transform = `translateY(${heart.direction * 15}px)`;
            heart.direction *= -1;
        }, 2500);
    });
}

let revealContainer = document.querySelector(".reveal-container")
revealContainer.addEventListener('click', () => {
    revealContainer.style.transform = `translateY(${window.innerHeight}px)`;
});

placeHearts();
animateHearts();