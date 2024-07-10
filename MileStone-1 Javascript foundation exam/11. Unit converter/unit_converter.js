const audio = new Audio('alert.mp3');
const button = document.getElementById("unitConverter");

button.addEventListener("click", () => {
    const celsius = document.getElementById("inputfield").value;

    if (isNaN(celsius)){
        audio.play();
        alert("Please enter a number");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;

    const createInputField = document.createElement("input");
    createInputField.setAttribute("id" , "result");
    createInputField.readOnly = true;

    createInputField.placeholder = 'result in \u{2109}';
    const addIn = document.getElementById("output");

    // remove previous result if exists

    const previousResult = document.getElementById("result");
    if(previousResult){
        previousResult.remove();
    }

    addIn.appendChild(createInputField);
    createInputField.value = fahrenheit + "\u{2109}";
})