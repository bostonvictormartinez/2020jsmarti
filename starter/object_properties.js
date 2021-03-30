//objects group dif variable.

var john={
    firstname:'john',
    lastname:'smith',
    birthYr:1990,
    family:['jane','jim','john'],
    job:'carpenter',
    isMarried:true,
}

console.log(john.birthYr)
console.log(john['lastname']);
var x='birthYr';
console.log(john[x]);


var jane=new  Object();
jane.firstname='jane'
jane.lastname='smith'
jane.birthYr=1990

console.log(jane.firstname);
