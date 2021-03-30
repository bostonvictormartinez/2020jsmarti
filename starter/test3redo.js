function billTip(bill){
    var percentage;
    if(bill<50){
        percentage=.20
    }
    else if(bill>=50 && bill<200){
        percentage=.15
    }
    else{
        percentage=.10
    }
    return percentage * bill;
}

console.log(billTip(10))
var bills=[124, 48, 240];
var tips=billTip(bills[0])//etc
console.log(tips)



function tipMaker(bill){
    if(bill){
        bill<50
          percentageBill=.20
    }
    else if(percentageBill){
        bill>50&&bill<200
          percentageBill=.15
    }
    else if(percentageBill){
        bill>200
          percentageBill=.10
    }

}
console.log(tipMaker(99))

