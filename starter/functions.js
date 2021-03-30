function calculateAge(birthYear){
    return 2020-birthYear;

}
var ageJohn=calculateAge(1990);
console.log(ageJohn);


var ageJohn=calculateAge(1990);
var ageMike=calculateAge(2000);
var ageJesus=calculateAge(0000);

console.log(ageJohn, ageMike,ageJesus);


function yearsToRetire(birthYear){
    var age=calculateAge(birthYear);
    var retirement=birthYear-65;
    console.log(retirement)
}

yearsToRetire(1990)