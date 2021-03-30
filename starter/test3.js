var restaurantBill=124;
var restaurantBill1=48;
var restaurantBill2=268;
var restaurantBillTip=restaurantBill*.15;
var restaurantBillTip1=restaurantBill1*.20;
var restaurantBillTip2=restaurantBill2*.10;


console.log(restaurantBillTip)
console.log(restaurantBillTip1)
console.log(restaurantBillTip2)


var arrayOneallThreeTips=[restaurantBillTip,restaurantBillTip1, restaurantBillTip2];
var arrayTwoAllThreeTipsPlusBill=
[(restaurantBill+restaurantBillTip),(restaurantBill1+restaurantBillTip1),(restaurantBill2+restaurantBillTip2)];

tipCalculatorSample=20/100 //=.2 or 20% of a value

console.log(arrayOneallThreeTips,arrayTwoAllThreeTipsPlusBill)


function tipCalculator(bill){
    var percentageBill;
    if(bill<50){
         percentageBill=.2;
    }
    else if(bill>=50 && bill<200){
         percentageBill=.15;
    }
    else if(bill>200){
         percentageBill=.10;
    }
    else(console.log('error'));
     return percentageBill*bill
  
 
}

tipCalculator(49)
console.log(tipCalculator(124))