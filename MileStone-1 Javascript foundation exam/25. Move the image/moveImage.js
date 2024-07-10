const movingImg = document.getElementById("moving-img");

let x_axis_Movement = 0;
let y_axis_Movement = 0;
const imageMovement = 10;

const viewportwidth = window.innerWidth;
console.log(viewportwidth);
const viewportHeight = window.innerHeight;
console.log(viewportHeight);

document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "ArrowUp":
            y_axis_Movement -= imageMovement;
            console.log(y_axis_Movement);
            if(y_axis_Movement <= -viewportHeight/2){
                y_axis_Movement = viewportHeight/2;
                console.log('value injection' + y_axis_Movement);
            }
            break;
        case "ArrowDown" :
            y_axis_Movement += imageMovement;
            console.log(y_axis_Movement);
            if (y_axis_Movement >= viewportHeight/2) {
                y_axis_Movement = -viewportHeight;
            }   
            break;
        case "ArrowRight" :
            x_axis_Movement += imageMovement;
            console.log(x_axis_Movement);
            if (x_axis_Movement >= viewportwidth/2) {
                x_axis_Movement = -viewportwidth/2;
            }     
            break;
        case "ArrowLeft" :
            x_axis_Movement -= imageMovement;
        console.log(x_axis_Movement);
        if (x_axis_Movement <= -viewportwidth/2) {
            x_axis_Movement = viewportwidth/2;
        }
        break;

    }
    movingImg.style.transform = `translate(${x_axis_Movement}px, ${y_axis_Movement}px)`;
});