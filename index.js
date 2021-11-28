//Function Definitions

//Function 1
function firstLetterName(iName) {
    let firstLetterOfName = iName.charAt(0);
    window.alert(`The name ${iName} starts with the letter ${firstLetterOfName}`);
    return firstLetterOfName;
}


//Function 2
function divisibleByTwo(iNum) {
    let iResult;
    if((iNum % 2) == 0){
        iResult = true;
    } else if((iNum % 2) != 0){
        iResult = false;
    }
    return iResult;
}

//Function 3
var arr = [20, 30, 48, 84, 55];
function largestNum(arr) {
    let iMax =0;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] > iMax){
           iMax = arr[i];
       } 
    }
    return iMax;
}


//Invoke/Call Functions

//Function 1 Invoke/Call
console.log(firstLetterName(window.prompt("What you your first name?:")));

//Function 2 Invoke/Call
console.log(divisibleByTwo(parseInt(window.prompt("Please enter an integer number:"))));

//Function 3 Invoke/Call
console.log(largestNum(arr));








    

