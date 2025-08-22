const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

function checkPassword() {
    // Get the entered password
    var enteredPassword = document.getElementById("password").value;
    var enteredEmail = document.getElementById("email").value;
    // Check if the password is correct (you can replace "yourCorrectPassword" with the actual correct password)
    if (enteredEmail === "kharearpan7777@gmail.com") {
    if (enteredPassword === "12345678") {
        // Redirect to the next page
        window.location.href = "Split Landing page/landing page.html";
    }
    else if (enteredPassword === "") {
        // Redirect to the next page
       
        alert("Enter your password")
    }
    
     else {
        // Display an error message (you can customize this part)
        alert("Incorrect password. Please try again.");
    }
}
else if(enteredEmail === ""){
    alert("Enter your email")
}
else{
    alert("Incorrect Password")
}
}