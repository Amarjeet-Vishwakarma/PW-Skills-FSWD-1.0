const validatePassword = document.getElementById("validatePassword");
validatePassword.addEventListener('click',function(){
    let newPassword = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let finalResult = document.getElementById("finalResult");

    if(newPassword === confirmPassword){
        console.log("Password Matched. Password validation successful.");
        finalResult.innerText = "Password Matched. Password validation successful.";
    }
    else{
        console.log("Password didn't matched. Password validation unsuccessful.");
        finalResult.innerText = "Password didn't matched. Password validation unsuccessful. ";
    }
});
