console.log("Login script loaded successfully");

document.getElementById("login--btn")
    .addEventListener("click", function () {
        // console.log("Login button clicked");
        
        const numberInput = document.getElementById("input-number");
        const contactNumber = numberInput.value;

        const inputPin = document.getElementById("input-pin");
        const pin = inputPin.value;

        if(contactNumber === "01234567890" && pin === "1234") {
            alert("Login successful!");

            // window.location.replace("/home.html");
            window.location.assign("/home.html");
        } else {
            alert("Invalid Pin. Please try again.");
        }
});