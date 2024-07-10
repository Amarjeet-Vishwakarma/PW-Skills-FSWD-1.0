const heading = document.getElementById("heading")
const changeTextButton = document.getElementById("toggle-text")

changeTextButton.addEventListener("click", () => {
    if(heading.textContent === "The most affordable learning platform"){
        heading.textContent = "PW Skills"
    }
    else{
        heading.textContent = "The most affordable learning platform"
    }
})