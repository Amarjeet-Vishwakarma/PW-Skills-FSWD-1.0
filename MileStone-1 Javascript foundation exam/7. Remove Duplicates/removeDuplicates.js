// JavaScript code

const addToCartButtons = document.querySelectorAll('.codingBooks');

const emptyTrolly = document.querySelector('#blankcontainer');

const selectedImages = [];

addToCartButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
        const productItem = button.parentElement;
        const productImage = productItem.querySelector('img');

        if (selectedImages.some((img) => img.src === productImage.src)){
            alert("you have already selected this product");
            return;
        }
        const clonedImage = productImage.cloneNode();
        emptyTrolly.appendChild(clonedImage);
        selectedImages.push(clonedImage);
    });
});
  