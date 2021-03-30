var john={
    name:'john',
    mass:150, //lbs'
    height:100,//inches
    johnBMI:function(){
        var calcFunction=this.mass/(this.height*this.height);
        return calcFunction;
    }
}
console.log(john.johnBMI());

var mark={
    name:'mark',
    mass:80,
    height:120,
    markBmi:function(){
        var calcFunction=this.mass/(this.height*this.height);
        return calcFunction;
    }
}
console.log(mark.markBmi());
console.log(john.johnBMI());
console.log(john.johnBMI(),mark.markBmi());










