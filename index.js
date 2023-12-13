// Callback Function (Function passed as a parameter in another function)

function addMath (num1, num2){
    return num1 + num2;
}


function receivesAFunction (addMath){
    return addMath();
}

// A function that returns a named function

function returnsANamedFunction (num1, num2){
    let result;

    if (num1 === 10 && num2 === 5){
        result = num1 + num2
    } else {
        result = "not available. Not valid numbers"
    }
    
    return function answer (){
        console.log(`The sum is ${result}`)
    }
}


// A function that returns an anonymous function

function returnsAnAnonymousFunction(num1, num2){
    return function(){
        return num1 + num2
    }
}