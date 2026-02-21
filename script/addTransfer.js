// console.log("Transfer money added");
//1- get the account number and validate
document.getElementById("add-transfer-btn")
.addEventListener("click", function () {
    const addTransfer = getValueFromInput("add-transfer-number");
    if(addTransfer.length !== 11){
        alert("Invalid account number.");
        return;
    }

    // get the amount and validate
    const amount = getValueFromInput("add-transfer-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);

    const pin = getValueFromInput("add-transfer-pin");

    if(pin === "1234"){
        if (newBalance < 0) {
            alert("Invalid amount.");
        } else {
            alert(`Money transfer successful to
                 ${addTransfer}
                  at ${new Date()}`);
            setBalance(newBalance);
        }
    }
});