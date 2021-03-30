var john={
    fullName:'john smith',
    bills:[124,48,268,180,42],
    calcTip:function(){
        this.tips=[];
        this.tipsPlusBill=[];

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
                percentage=.10;
            }
        this.tips[i]=bill*percentage;
        this.tipsPlusBill[i]=(bill*percentage)+bill;

        }


    }

}



var mark={
    fullName:'mark smith',
    bills:[77,375,110,45],
    calcTip:function(){
        this.tips=[];
        this.tipsAndBills=[];

        for(var i=0; i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];

            if(bill<100){
                percentage=.20
            }
            else if(bill>100&&bill<300){
                percentage=.15
            }
            else{
                percentage=.25
            };

        this.tips[i]=bill*percentage
        this.tipsAndBills[i]=(bill*percentage) + bill;
        }

    }

}
mark.calcTip();
john.calcTip();
console.log(john,mark);


//get average tip for each mark and john
// if else stmt for log which fam pd highest avg tip

function getAvgTips(tips){
    var sum = 0

    for(var i=0;i<tips.length;i++){
        sum=sum+tips[i];
    }
        return sum/tips.length
}
mark.calcTip();
john.calcTip();
john.averageSum=getAvgTips(john.tips);
mark.averageSum=getAvgTips(mark.tips);

console.log(john,mark);




