document.getElementById("cashout-btn")
    .addEventListener("click", function () {
        //1-get the agent number and validate
        const cashoutNumberInput = document.getElementById("cashout-number");
        const cashoutNumber = cashoutNumberInput.value;
        console.log(cashoutNumber);

        if (cashoutNumber.length !== 11) {
            alert("Invalid agent number.");
            return;
        }
        
        //2-get the amount ,validate, convert to number
        const cashoutAmountInput = document.getElementById("cashout-amount");
        const amount = cashoutAmountInput.value;
        console.log(amount);
        //3-get the current balance , validate, convert to number
        const balanceElement = document.getElementById("balance");
        const balance = balanceElement.innerText;
        console.log(balance);

        //4- calulate new balance

        const newBalance = Number(balance) - Number(amount);
        console.log(newBalance);

        if (newBalance < 0) {
            alert("Invalid amount.");
        } else {
            console.log("new Balance", newBalance);
        }
        //5-get the pin and verify
        const cashoutPinInput = document.getElementById("cashout-pin");
        const Pin = cashoutPinInput.value;
        if (Pin === "1234") {
            alert("Cashout successful!" + newBalance);
            balanceElement.innerText = newBalance;
        } else {
            alert("Invalid Pin. Please try again.");
        }

        //5-1 true :: set balance 
        
        //5-2 false :: alert wrong pin/ return
    })
    