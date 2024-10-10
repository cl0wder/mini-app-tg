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
    alert('this is a js test, after clicking OK it will change the background color');
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
})