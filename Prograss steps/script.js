const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

let currentActive = 1;
next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
    } else {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
    } else {
        currentActive = 1;
    }
    update();
});
cosnt update = () => {
    if (currentActive < 2) {
        prev.disabled = true;
    } else if (currentActive > 3) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    circles.forEach(((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    }))
    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%'
}
