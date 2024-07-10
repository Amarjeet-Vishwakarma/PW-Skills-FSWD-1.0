

function doubleQuantity(cart) {
    let correctedCart = [];

    for(let i=0; i < cart.length; i++){
        correctedCart.push(cart[i]*2);
    }
    return correctedCart;
}

let Origionalcart = [1,2,3,4,];
 const correctedCart = doubleQuantity(Origionalcart);

 console.log(correctedCart);