const randomBtn = document.querySelector('#rndmBtn');
const output = document.querySelector('.output');

randomBtn.addEventListener("click", () => {
    const randomGenration = Math.floor(Math.random() * 100) + 1;
    output.innerHTML = randomGenration;
    output.style.display = 'flex';
})