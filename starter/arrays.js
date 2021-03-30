var names=['john', 'mark', 'james'];

console.log(names[0])

var namess=['mike','jeremy'];
var years=[1990,2000,2010];

console.log(namess[0])
console.log(namess.length)

namess[1]='Dave';
console.log(namess)

namess[2]='Mary'
console.log(namess)

namess[namess.length]='dsa';
console.log(namess)

var john=['john','smith',22, 'September', false];
john.push('blue');
console.log(john)

john.pop();
console.log(john);

console.log(john.indexOf(23));
var isDesigner=john.indexOf('smith')=== -1 ?'not designer':'is designer';
console.log(isDesigner);

