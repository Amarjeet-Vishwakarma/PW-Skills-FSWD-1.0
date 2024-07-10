const discountbtn = document.querySelector('#disc-btn');
discountbtn.addEventListener("click" , () => {
    let origionalPrice = document.querySelector('#actualPrice').value;
    let discountPrice = document.querySelector('#discountedPrice').value;

    if (origionalPrice === "" || discountPrice === "") {
        alert("Please fill up all the input field")
    }
    else {
        const discount = origionalPrice - discountPrice;
        const percentageDiscount =100*(discount/origionalPrice);
        document.querySelector(".output").innerHTML = `Congratulation 🎉 Amarvish you got <span class = "discount-percentage"> ${percentageDiscount.toFixed(2)}% </span>  discount on this product `;
        const congrats = document.querySelector(".cong-img") ;
        congrats.style.display = "block";
        
        
    }
});