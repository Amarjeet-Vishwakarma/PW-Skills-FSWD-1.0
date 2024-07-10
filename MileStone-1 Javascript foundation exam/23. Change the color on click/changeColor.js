const button = document.getElementById("colorButton");
const colorArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0 ; i < 6; i++){
        hexColor += colorArr[Math.floor(Math.random() * colorArr.length)];
        console.log(hexColor);
    }
    document.body.style.backgroundColor = hexColor;
})