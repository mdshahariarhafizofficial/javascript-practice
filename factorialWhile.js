
var i = 1;
var factorial = 1;
while( i <= 12){
    factorial = factorial*i;
    console.log(factorial);
    i++;
}


// -----------------------------------------

function factorial(num){
    let i = 1;
    let calc = 1;
    while(i <= num){
        calc = i*calc;
        i++;
    }
    return calc;
}

let count = factorial(13);
console.log(count);