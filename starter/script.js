var john={
    name:'John',
    yrBirth:1990,
    job:'teacher'
};

var Person=function(name,yrBirth,job){
    this.name=name;
    this.yrBirth=yrBirth;
    this.job=job;
    this.calcAge=function(){
        console.log(2020-this.yrBirth)
    }
}

var john=new Person('John',1990,'teacher')
john.calcAge()