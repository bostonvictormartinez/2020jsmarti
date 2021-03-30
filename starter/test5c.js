var john={
    fullName:'john smith',
    bills:[124,48,268,180,43],
    calcTip:function(){
            this.tip=[];
            this.tipAndBill=[];
            
            for(var i=0;i<this.bills.length;i++){
                
                var percentage;
                var bill=this.bills[i];
                
            if(bill<50){
                percentage=.20;
            }
            else if(bill>50&&bill<200){
                percentage=.15;
            }
            else{
                percentage=.10
            }
            this.tip[i]=bill*percentage
            this.tipAndBill[i]=(bill*percentage)+bill;

        
        }
    }
}


var mark={
    fullName:'mark family',
    bills:[77,475,120,45],
    calcTip:function () {
        this.tip=[];
        this.tipAndBill=[];

        for(var i=0;i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];

            if(bill<100){
                percentage=.20;
            }
            else if(bill>100&&bill<300){
                percentage=.15;
            }
            else{
                percentage=.25;
            }
            
            this.tip[i]=bill*percentage
            this.tipAndBill[i]=(bill*percentage)+bill

        }
        
    }
}

mark.calcTip()
john.calcTip()
console.log(john,mark)



function calcTipAvg(tip) {

    sum=0
    for(var i=0;i<tip.length;i++){
        sum=sum + tip[i]
    }
    return sum/tip.length
    
}
john.average=calcTipAvg(john.tip)
mark.average=calcTipAvg(mark.tip)

console.log(john,mark)

if(john.average<mark.average){
    console.log('Mark paid more average')
}else{
    console.log('john paid more average.')
}