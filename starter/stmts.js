var whatDoYouDo=function(job,firstname){
    switch (job) {
        case 'teacher': console.log(firstname+' is a teacher');
            break;
        case 'carpenter':console.log(firstname+ 'is a carpenter');
            break;
        case 'banker':console.log(firstname + 'is a banker.');
            break;
    
        default:console.log('error');
            break;
    }
}

console.log(whatDoYouDo('teacher','JEsus'));


var whatisJob=function(occupation, nombre){
    switch (occupation) {
        case "doctor": return 'you are a doc.';            
            break;
        case "nurse": return nombre + 'is a nurse.';
            break;
        case "coach": return nombre + 'is a coach.';
        default:console.log('error')
            break;
    }
}
console.log(whatisJob("dog","James"));
