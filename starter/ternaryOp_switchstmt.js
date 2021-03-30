var firstName='john'
var age=19;

age>18 ? console.log('can drink'):console.log('drinks juice');




var name='johna';
var age =12;

age >18 ? console.log('adults yo'):console.log('no drink.')


var job='instructor';
var weight=120//lbs
var transportation='bus';

switch(job){
    case 'instructor':
    case 'teacher':console.log('teacher');
    break;
    case 'coach':console.log('coach');
    break;
    case 'rapper':console.log('rapper');
    break;
    default:console.log('error');

}

var name='mike';
var ages=19;
switch (ages) {
    case ages>13 && ages>20:console.log('teenager for now');
        break;
    case ages<13:console.log('boy for now');
        break;
    case ages>20:console.log('adult');
        break;

    default:console.log('error');
}///wrong way

///right way

switch (true) {
    case ages>13&&ages<20:console.log('teenagers rule')
        
        break;
    case ages<=12:console.log('kids rule');
        break;
    case ages>20:console.log('adults rule')
        break;
    default:console.log('error');
        break;
}
