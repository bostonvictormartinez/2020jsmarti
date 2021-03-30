var john
var mike
var johnTeam=89;
var mikeTeam=116;
var johnTeam1=120;
var mikeTeam1=94;
var mikeTeam2=123;
var johnTeam2=103;

var johnTeamAvgScore= (johnTeam + johnTeam1 + johnTeam2)/3;
var mikeTeamAvgScore= (mikeTeam + mikeTeam1 + mikeTeam2)/3;

console.log(johnTeamAvgScore);
console.log(mikeTeamAvgScore);

switch (true) {
    case johnTeamAvgScore>mikeTeamAvgScore:console.log('john is higher avg.' + johnTeamAvgScore);     
        break;
    case mikeTeamAvgScore>johnTeamAvgScore:console.log('mike is higher avg.' + mikeTeamAvgScore);
        break;
    default:console.log('error')
        break;
}



