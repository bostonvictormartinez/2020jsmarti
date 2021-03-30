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
console.log(mark);


