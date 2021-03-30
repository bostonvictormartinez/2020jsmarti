var bills=[49];
for(var i=0;i<bills.length;i++){
    if (bills[i]<50) {
        return bills[i]*.20;
        console.log(billsLowest[i]());
        console.log(bills[i]*.20)
        console.log(bills[i])
        
        
    }
    else if(bills[i]>=50&&bills[i]<200){
        return billsMed=bills[i]*.15
        console.log(bills[i]*.15)
        console.log(bills[i])
    }else{
        bills[i]>200;
        console.log(bills[i]*.10)
        console.log(bills[i]);

    }
}

