// console.log("Machine added");
//machine id-> input value dite pare
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}
// machine id-> balance 
function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}
// machine value -> set balancce 

function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}

// machine id > hide all . show id
function showOnly(id){
    // console.log("show only cliked");
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    // console.log(`add money - ${addMoney}, cashout - ${cashout}`);
    // hide all
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");

    // show only id jar ache
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}