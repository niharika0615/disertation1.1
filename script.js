let securityValue = document.getElementById('secValue');

function getValue(val){
    return val.value;
}

// this function gets a random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function is to get the lenght of the security value
function getLengthOfSecurityValue(num) {
    let val = num.value;
    let inputLength = val.length;
    return inputLength;
    
}

function checkForFirstLetter(secureValue, imageValue){
    let flag = false;
    let lenghtOfTheValue = getLengthOfSecurityValue(securityValue);

    let firstHalf = Math.floor(lenghtOfTheValue/2);
    

    let theFirstRandomNumber = getRandomNumber(0, firstHalf);
    

    //console.log(`The first character ${theFirstRandomNumber} ${securityValue.value.charAt(theFirstRandomNumber)}`);
    //console.log(`The second character ${theSecondRandomNumber} ${securityValue.value.charAt(theSecondRandomNumber)}`);


    if (secureValue[theFirstRandomNumber] === imageValue[0]) {
        let flag = true;       
    }
    else{
       let flag = false;
    }

    return flag;
}

function checkForSecondLetter(secureValue, imageValue){
    let flag = false;
    let lenghtOfTheValue = getLengthOfSecurityValue(securityValue);
    let secondHalf = Math.ceil(lenghtOfTheValue/2);

    let theSecondRandomNumber = getRandomNumber(secondHalf, lenghtOfTheValue-1);

    if (secureValue[theSecondRandomNumber] === imageValue[0]) {
        let flag = true;       
    }
    else{
       let flag = false;
    }

    return flag;
}

function toCheckFlag(secVal, value){

    if (checkForFirstLetter(getValue(secVal), value) === checkForSecondLetter(getValue(secVal), value)){
        alert("You are in!");
    }
    else{
        alert("You are not in!");
    }
}



document.getElementById('car').addEventListener('click', function() {
    let value = "car";
    toCheckFlag(securityValue, value)
});

document.getElementById('dance').addEventListener('click', function() {
    let value = 'dance';
    toCheckFlag(securityValue, value)
});

document.getElementById('food').addEventListener('click', function() {
    let value = 'food';
    toCheckFlag(securityValue, value)
});

document.getElementById('house').addEventListener('click', function() {
    let value = 'house';
    toCheckFlag(securityValue, value)
});

document.getElementById('mountain').addEventListener('click', function() {
    let value = 'mountain';
    toCheckFlag(securityValue, value)
});

document.getElementById('nature').addEventListener('click', function() {
    let value = 'nature';
    toCheckFlag(securityValue, value)
});

document.getElementById('ocean').addEventListener('click', function() {
    let value = 'ocean';
    toCheckFlag(securityValue, value)
});

document.getElementById('sky').addEventListener('click', function() {
    let value = 'sky';
    toCheckFlag(securityValue, value)
});

document.getElementById('tree').addEventListener('click', function() {
    let value = 'tree';
    toCheckFlag(securityValue, value)
});