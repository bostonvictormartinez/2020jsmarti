var john={
    fullName:'john family',
    bills:[124,48,110,225],
    calcTip:function(){
        this.tip=[]
        this.tipPlusBill=[];

        for(var i=0;i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];

            if(bill<50){
                percentage=.20;
            }
            else if(bill>50&&bill<200){
                percentage=.10
            }
        this.tip[i]=bill*percentage;
        this.tipPlusBill[i]=(bill*percentage)+bill;

        }
    }
}

john.calcTip();
console.log(john)


function calcAvg(tip){
    sum=0;
    for(var i=0;i<tip.length;i++){
        sum=sum+tip[i]
    }
    return sum/tip.length
}

john.average=calcAvg(john.tip)
console.log(john)