// console.log("Machine script loaded");

//machine id-> input value dite pare
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}