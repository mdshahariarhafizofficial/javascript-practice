
let factorial = 1;

for(let i = 1; i <= 10; i++){
    factorial = factorial*i;
    console.log(factorial);
}

// 1*2*3*4*5*6*7*8*9*10

function factorial(num){
    let factorial = 1;
    for (let i = 1; i <= num ; i++){
        factorial = factorial*i;
    }
    return factorial;
}

var outPut = factorial(5);
console.log(outPut);