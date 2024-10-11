const changeBackgroundButton = document.getElementById('chang-background');

changeBackgroundButton.addEventListener('click', () => {
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const testButton = document.getElementById('test');
testButton.addEventListener('click', () => {
    alert('JS test, after clicking OK it will change the background color');
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
})

const button = document.querySelector('#button3');
const canvas = document.querySelector('#confetti');


const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['👾', '⚡️', '💥', '✨', '💫', '👑', '♂️','👽'], }).then(() => jsConfetti.addConfetti())
})

