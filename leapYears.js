function leapYears(years){
    var  Leap= years%4;
    return Leap;
}


var check_1 = leapYears(1999);
console.log(check_1);


var check_2 = leapYears(2015);
console.log(check_2);


var check_3 = leapYears(2020);
console.log(check_3);


var check_4 = leapYears(2022);
console.log(check_4);