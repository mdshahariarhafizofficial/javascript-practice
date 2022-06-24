function inchtoFeet(inch){
    var feet = inch/12;
    return feet;
}

var table = inchtoFeet(140);
console.log(table);

var bed = inchtoFeet(300);
console.log(bed);

var chair = inchtoFeet(560);
console.log(chair);

var door = inchtoFeet(700);
console.log(door);

// ----------------------------------------------------------------------
//                 // inchtoFeet & froot-price
// ----------------------------------------------------------------------
function froot(price){
    var vat = price+50;
    return vat;
}

var aum = froot(100);
console.log(aum);

var jam = froot(200);
console.log(jam);

var kathal = froot(350);
console.log(kathal);

var licu = froot(400);
console.log(licu);

var kola = froot(40);
console.log(kola);