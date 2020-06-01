/************************************************
*********CODING CHALLENGE 3  ************
************************/


function tipcalc (bills){
    var percentage;
    
    if ( bills <= 50){
        percentage = 0.2;
    }
    
    else if ( bills > 50 && bills <= 200 ){
        percentage = 0.15;
    }
    else {
        percentage = 0.1;
    }
    return percentage * bills;
    }

console.log(tipcalc(124));
console.log(tipcalc(48));
console.log(tipcalc(268));

var bill = [124,48,268];
var tiparray = [tipcalc(bill[0]),tipcalc(bill[1]),tipcalc(bill[2])];
console.log(tiparray);

var amount = [bill[0] + tipcalc(bill[0]),bill[1] + tipcalc(bill[1]),bill[2] + tipcalc(bill[2])];
console.log(amount);

var final = [bill[0] + tiparray[0],bill[1] + tiparray[1],bill[2] + tiparray[2] ];
console.log(final);                                   




